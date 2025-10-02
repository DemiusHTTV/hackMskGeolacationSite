<template>
    <MyHeader></MyHeader>
 
    <main>
        <div class="main-content">
            <div class="main-upload-section">
                <div class="upload-section">
                    <h2 class="upload-title">Загружайте свою фотографию</h2>
                    <div class="upload-area" 
                         @click="triggerFileInput"
                         @drop="handleDrop"
                         @dragover="handleDragOver"
                         @dragleave="handleDragLeave"
                         :class="{ 'drag-over': isDragOver }">
                        <div class="upload-icon">
                            <i class="fas fa-cloud-upload-alt"></i>
                        </div>
                        <p class="upload-text">Перетащите сюда изображение или нажмите для выбора</p>
                        <input type="file" id="fileInput" @change="handleFileSelect" accept="image/*" style="display: none;">
                    </div>
                    
                    <!-- Статус загрузки -->
                    <div v-if="uploadStatus" class="status-message" :class="statusClass">
                        {{ uploadStatus }}
                    </div>
                    
                    <!-- Прогресс бар -->
                    <div v-if="isProcessing" class="progress-container">
                        <div class="progress-bar">
                            <div class="progress-fill" :style="{ width: progressWidth }"></div>
                        </div>
                        <p class="progress-text">Обработка ML моделью... {{ progressText }}</p>
                    </div>
                </div>
            </div>
            
            <h2 class="stats-title">Ваша статистика</h2>
            
            <div class="stats-container">
                <div class="stat-card">
                    <div class="stat-icon">
                        <i class="fas fa-images"></i>
                    </div>
                    <div class="stat-value">{{ stats.totalUploaded }}</div>
                    <div class="stat-label">Всего загружено</div>
                </div>
                
                <div class="stat-card">
                    <div class="stat-icon">
                        <i class="fas fa-calendar-week"></i>
                    </div>
                    <div class="stat-value">{{ stats.lastWeek }}</div>
                    <div class="stat-label">За последнюю неделю</div>
                </div>
                
                <div class="stat-card">
                    <div class="stat-icon">
                        <i class="fas fa-weight-hanging"></i>
                    </div>
                    <div class="stat-value">{{ stats.avgSize }}</div>
                    <div class="stat-label">Средний размер</div>
                </div>
                
                <div class="stat-card">
                    <div class="stat-icon">
                        <i class="fas fa-star"></i>
                    </div>
                    <div class="stat-value">{{ stats.avgRating }}</div>
                    <div class="stat-label">Средний рейтинг</div>
                </div>
            </div>
        </div>
    </main>
    <footer>
        <h3>Hackathoon</h3>
    </footer>
</template>

<script>
import MyHeader from '@/components/MyHeader.vue';


const API= 'http://localhost:8000'; 

export default {
    name: 'MainPage',
    components: {
        MyHeader,
    },
    data() {
        return {
            isDragOver: false,
            isProcessing: false,
            uploadStatus: '',
            statusClass: '',
            currentFileId: null,
            checkInterval: null,
            progressWidth: '0%',
            progressText: '0%',
            stats: {
                totalUploaded: 42,
                lastWeek: 7,
                avgSize: '3.5 MB',
                avgRating: '8.7/10'
            }
        }
    },
    methods: {
        triggerFileInput() {
            document.getElementById('fileInput').click();
        },
        
        handleDragOver(e) {
            e.preventDefault();
            this.isDragOver = true;
        },
        
        handleDragLeave(e) {
            e.preventDefault();
            this.isDragOver = false;
        },
        
        handleDrop(e) {
            e.preventDefault();
            this.isDragOver = false;
            
            const files = e.dataTransfer.files;
            if (files.length > 0) {
                this.processFile(files[0]);
            }
        },
        
        handleFileSelect(e) {
            const file = e.target.files[0];
            if (file) {
                this.processFile(file);
            }
        },
        
        async processFile(file) {
            
            if (!file.type.startsWith('image/')) {
                this.showStatus('Пожалуйста, выберите файл изображения', 'error');
                return;
            }
            
            
            document.getElementById('fileInput').value = '';
            
            this.showStatus('Загрузка файла...', 'info');
            this.isProcessing = true;
            this.progressWidth = '30%';
            this.progressText = '30%';
            
            try {
                
                const formData = new FormData();
                formData.append('file', file);
                
                const response = await fetch(`${API}/upload/`, {
                    method: 'POST',
                    body: formData
                });
                
                if (!response.ok) {
                    throw new Error(`Ошибка сервера: ${response.status}`);
                }
                
                const result = await response.json();
                this.currentFileId = result.file_id;
                
                this.showStatus('Файл загружен! Обработка иидеттт обратотка...', 'success');
                this.progressWidth = '60%';
                this.progressText = '60%';
                
                this.startStatusChecking();
                
            } catch (error) {
                console.error('Ошибка загрузки:', error);
                this.showStatus(`Ошибка загрузки: ${error.message}`, 'error');
                this.isProcessing = false;
                this.progressWidth = '0%';
                this.progressText = '0%';
            }
        },
        
        startStatusChecking() {
           
            this.checkStatus();
            
           
            this.checkInterval = setInterval(() => {
                this.checkStatus();
            }, 2000);
        },
        
        async checkStatus() {
            if (!this.currentFileId) return;
            
            try {
                const response = await fetch(`${API}/status/${this.currentFileId}`);
                const status = await response.json();
                
                if (status.status === 'completed' && status.redirect) {
                    
                    this.showStatus('Обработка завершена! Перенаправление...', 'success');
                    this.progressWidth = '100%';
                    this.progressText = '100%';
                   
                    clearInterval(this.checkInterval);

                    setTimeout(() => {
                        this.redirectToUpload();
                    }, 1500);
                    
                } else if (status.status === 'processing') {
                    this.progressWidth = '75%';
                    this.progressText = '75%';
                    this.showStatus('ML модель обрабатывает изображение...', 'info');
                } else if (status.status === 'failed') {
                    this.showStatus('Ошибка обработки ML моделью', 'error');
                    this.isProcessing = false;
                    clearInterval(this.checkInterval);
                }
                
            } catch (error) {
                console.error('Ошибка проверки статуса:', error);
            }
        },
        
        redirectToUpload() {

            this.$router.push('/upload');
        },
        
        showStatus(message, type) {
            this.uploadStatus = message;
            this.statusClass = type;
            
          
            if (type === 'success') {
                setTimeout(() => {
                    this.uploadStatus = '';
                }, 5000);
            }
        }
    },
    
    beforeUnmount() {
      
        if (this.checkInterval) {
            clearInterval(this.checkInterval);
        }
    }
}
</script>

<style scoped>



</style>
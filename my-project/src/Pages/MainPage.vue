
<template>
    <MyHeader></MyHeader>
 
    <main>
                  <div class="main-content">
         <div class="main-upload-section">
            <div class="upload-section">
                <h2 class="upload-title">Загружайте свою фотографию</h2>
                <div class="upload-area">
                    <div class="upload-icon">
                        <i class="fas fa-cloud-upload-alt"></i>
                    </div>
                    <p class="upload-text">Перетащите сюда изображение или нажмите для выбора</p>
                    <input type="file" id="fileInput" accept="image/*">
                </div>
            </div>
        </div>
            
            <h2 class="stats-title">Ваша статистика</h2>
            
            <div class="stats-container">
                <div class="stat-card">
                    <div class="stat-icon">
                        <i class="fas fa-images"></i>
                    </div>
                    <div class="stat-value">42</div>
                    <div class="stat-label">Всего загружено</div>
                </div>
                
                <div class="stat-card">
                    <div class="stat-icon">
                        <i class="fas fa-calendar-week"></i>
                    </div>
                    <div class="stat-value">7</div>
                    <div class="stat-label">За последнюю неделю</div>
                </div>
                
                <div class="stat-card">
                    <div class="stat-icon">
                        <i class="fas fa-weight-hanging"></i>
                    </div>
                    <div class="stat-value">3.5 MB</div>
                    <div class="stat-label">Средний размер</div>
                </div>
                
                <div class="stat-card">
                    <div class="stat-icon">
                        <i class="fas fa-star"></i>
                    </div>
                    <div class="stat-value">8.7/10</div>
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

export default{
    name:'MainPage',
    components:{
      
        MyHeader,
    }
    }
</script>

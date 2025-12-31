<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
    <!-- Header với Navigation - Transparent -->
    <header class="absolute top-0 left-0 right-0 z-50 text-white">
      <div class="container mx-auto px-3 sm:px-4 py-3 sm:py-4">
        <!-- Mobile: Stack layout -->
        <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-6">
          <div class="animate-slide-in-left flex-shrink-0">
            <h1 class="text-lg sm:text-xl md:text-2xl font-bold drop-shadow-lg whitespace-nowrap">Ban Chỉ Huy Quân Sự</h1>
            <p class="text-xs sm:text-sm text-gray-100 mt-1 drop-shadow-md whitespace-nowrap">Phường Phú Xuân - Thành phố Huế</p>
          </div>
          
          <!-- Navigation Menu -->
          <nav class="flex items-center gap-2 sm:gap-3 md:gap-4 lg:gap-6 animate-slide-in-right overflow-x-auto pb-2 sm:pb-0 scrollbar-hide">
            <a 
              v-for="item in navItems"
              :key="item.id"
              :href="`#${item.id}`"
              @click.prevent="scrollToSection(item.id)"
              class="text-xs sm:text-sm md:text-base whitespace-nowrap hover:underline transition-all duration-300 drop-shadow-md px-1"
            >
              {{ item.label }}
            </a>
          </nav>
        </div>
        
        <!-- Contact Info -->
        <div class="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-white/30 flex flex-col sm:flex-row flex-wrap gap-2 sm:gap-4 text-xs sm:text-sm drop-shadow-md">
          <span class="whitespace-nowrap">📍 72 Nguyễn Gia Thiều, TP Huế</span>
          <span class="whitespace-nowrap">📞 0234.3557.575</span>
          <a 
            href="https://facebook.com/bch.quan.su.phuong.phu.xuan" 
            target="_blank" 
            class="hover:text-yellow-300 transition-colors whitespace-nowrap"
          >
            🌐 Facebook
          </a>
        </div>
      </div>
    </header>

    <!-- Banner Slider -->
    <section id="home" class="relative h-[500px] md:h-[600px] overflow-hidden">
      <div class="absolute inset-0">
        <div 
          v-for="(slide, index) in bannerSlides"
          :key="index"
          class="absolute inset-0 transition-opacity duration-1000"
          :class="{ 'opacity-100': currentSlide === index, 'opacity-0': currentSlide !== index }"
        >
          <div 
            class="w-full h-full bg-cover bg-center"
            :style="{ backgroundImage: `url(${slide.image})` }"
          >
            <div class="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60"></div>
          </div>
        </div>
      </div>
      
      <!-- Slider Content -->
      <div class="container mx-auto px-4 h-full flex items-center justify-center relative z-20 pt-20 sm:pt-24 md:pt-32">
        <div class="text-center text-white animate-fade-in-up px-2">
          <div class="text-4xl sm:text-6xl md:text-8xl mb-3 sm:mb-4 animate-float">🎖️</div>
          <h2 class="text-2xl sm:text-3xl md:text-5xl font-bold mb-2 sm:mb-4 drop-shadow-lg">Ban Chỉ Huy Quân Sự</h2>
          <h3 class="text-base sm:text-xl md:text-2xl mb-4 sm:mb-6 drop-shadow-md">Phường Phú Xuân - Thành phố Huế</h3>
          <p class="text-sm sm:text-lg md:text-xl max-w-2xl mx-auto opacity-90 drop-shadow-md px-2">
            Đơn vị quân sự địa phương trọng điểm về Quốc phòng - An ninh
          </p>
        </div>
      </div>
      
      <!-- Slider Controls -->
      <div class="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex gap-2">
        <button
          v-for="(slide, index) in bannerSlides"
          :key="index"
          @click="currentSlide = index"
          class="w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300"
          :class="currentSlide === index ? 'bg-white w-6 sm:w-8' : 'bg-white/50 hover:bg-white/75'"
        ></button>
      </div>
      
      <!-- Navigation Arrows -->
      <button
        @click="prevSlide"
        class="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 z-30 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-2 sm:p-3 rounded-full transition-all duration-300 hover:scale-110 text-lg sm:text-xl"
      >
        ←
      </button>
      <button
        @click="nextSlide"
        class="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 z-30 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-2 sm:p-3 rounded-full transition-all duration-300 hover:scale-110 text-lg sm:text-xl"
      >
        →
      </button>
    </section>

    <!-- Main Content -->
    <main class="container mx-auto px-4 py-8">
      <!-- Giới thiệu -->
      <section id="gioi-thieu" class="mb-16 scroll-section">
        <div class="bg-white rounded-2xl shadow-xl p-8 md:p-12 hover-lift">
          <div class="flex items-center gap-4 mb-6">
            <div class="text-5xl animate-float">📋</div>
            <h2 class="text-3xl md:text-4xl font-bold gradient-text">Giới thiệu</h2>
          </div>
          <div class="prose max-w-none">
            <p class="text-gray-700 leading-relaxed mb-4 text-lg">
              Ban Chỉ huy Quân sự (BCH QS) Phường Phú Xuân là đơn vị quân sự địa phương trực thuộc 
              Ban Chỉ huy Quân sự Quận Phú Xuân, Bộ CHQS Tỉnh Thừa Thiên Huế.
            </p>
            <p class="text-gray-700 leading-relaxed mb-6 text-lg">
              Đơn vị có nhiệm vụ quản lý, chỉ đạo công tác quân sự, quốc phòng tại địa phương, 
              tuyển quân, huấn luyện dân quân tự vệ, và tham gia phòng chống thiên tai, cứu hộ cứu nạn.
            </p>
            <div class="grid md:grid-cols-2 gap-6 mt-8">
              <div class="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-xl border-l-4 border-army-green hover-lift transition-all">
                <h3 class="font-semibold text-army-green mb-2 text-lg flex items-center gap-2">
                  <span>🏛️</span> Trụ sở
                </h3>
                <p class="text-gray-700">Tầng 1, UBND Phường Phú Xuân</p>
                <p class="text-gray-600 text-sm mt-1">72 Nguyễn Gia Thiều, TP. Huế</p>
              </div>
              <div class="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-xl border-l-4 border-blue-600 hover-lift transition-all">
                <h3 class="font-semibold text-blue-600 mb-2 text-lg flex items-center gap-2">
                  <span>📋</span> Đơn vị cấp trên
                </h3>
                <p class="text-gray-700">Ban Chỉ huy Quân sự Quận Phú Xuân</p>
                <p class="text-gray-600 text-sm mt-1">Bộ CHQS Tỉnh Thừa Thiên Huế</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Thống kê -->
      <section id="thong-ke" class="mb-16 scroll-section">
        <h2 class="text-3xl font-bold text-gray-800 mb-8 flex items-center gap-3">
          <span class="text-4xl">📊</span>
          <span class="gradient-text">Thống kê</span>
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div 
            v-for="(stat, index) in stats"
            :key="stat.label"
            class="bg-white rounded-xl shadow-lg p-6 border-l-4 hover-lift transition-all"
            :class="`scroll-item delay-${index * 100}`"
          >
            <h3 class="text-gray-600 text-sm font-medium mb-2">{{ stat.label }}</h3>
            <p 
              class="text-4xl font-bold transition-all duration-500"
              :class="stat.color"
            >
              {{ stat.value }}
            </p>
            <div class="mt-4 h-1 bg-gray-200 rounded-full overflow-hidden">
              <div 
                class="h-full rounded-full transition-all duration-1000"
                :class="stat.bgColor"
                :style="{ width: '100%' }"
              ></div>
            </div>
          </div>
        </div>
      </section>

      <!-- Quy mô & Tổ chức -->
      <section id="to-chuc" class="mb-16 scroll-section">
        <h2 class="text-3xl font-bold text-gray-800 mb-8 flex items-center gap-3">
          <span class="text-4xl">🏗️</span>
          <span class="gradient-text">Quy mô & Tổ chức lực lượng</span>
        </h2>
        <div class="bg-white rounded-xl shadow-xl p-8 mb-8 scroll-item">
          <div class="grid md:grid-cols-2 gap-6">
            <div>
              <h3 class="text-xl font-semibold text-army-green mb-4 flex items-center gap-2">
                <span>🎯</span> Vị trí Chiến lược
              </h3>
              <p class="text-gray-700 mb-4">
                Phú Xuân là phường trung tâm hành chính của TP Huế, được xác định là 
                <strong>phường trọng điểm về Quốc phòng - An ninh</strong>.
              </p>
              <p class="text-gray-700">
                Tổ chức biên chế theo mô hình <strong>Đại đội/Tiểu đoàn</strong> 
                (lớn hơn cấp Trung đội của xã thường).
              </p>
            </div>
            <div>
              <h3 class="text-xl font-semibold text-army-green mb-4 flex items-center gap-2">
                <span>👥</span> Quân số
              </h3>
              <p class="text-gray-700 mb-2">
                <strong>Tổng quân số:</strong> {{ organizationInfo.totalPersonnel }} người
              </p>
              <ul class="text-gray-700 space-y-2">
                <li>• <strong>Lực lượng Thường trực:</strong> {{ organizationInfo.coreForce }} người</li>
                <li>• <strong>Lực lượng Tại chỗ:</strong> {{ organizationInfo.localForce }} người</li>
                <li>• <strong>Lực lượng Binh chủng:</strong> {{ organizationInfo.specializedForce }} người</li>
              </ul>
            </div>
          </div>
        </div>
        
        <!-- Cơ cấu tổ chức -->
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            v-for="(unit, index) in units"
            :key="unit.id"
            class="bg-white rounded-xl shadow-md p-6 hover-lift transition-all border border-gray-100 scroll-item"
            :class="`delay-${index * 100}`"
          >
            <div class="flex items-start justify-between mb-4">
              <h3 class="text-lg font-semibold text-army-green">{{ unit.name }}</h3>
              <span class="text-2xl animate-float" :style="{ animationDelay: `${index * 0.2}s` }">⚙️</span>
            </div>
            <p class="text-gray-600 text-sm mb-4">{{ unit.description }}</p>
            <div class="flex items-center justify-between pt-4 border-t border-gray-100">
              <span class="text-xs text-gray-500">Số lượng</span>
              <span class="px-3 py-1 bg-army-green text-white rounded-full text-sm font-semibold">
                {{ unit.estimatedPersonnel || 'N/A' }}
              </span>
            </div>
          </div>
        </div>
      </section>

      <!-- Lãnh đạo chỉ huy -->
      <section id="lanh-dao" class="mb-16 scroll-section">
        <h2 class="text-3xl font-bold text-gray-800 mb-8 flex items-center gap-3">
          <span class="text-4xl">👔</span>
          <span class="gradient-text">Lãnh đạo chỉ huy</span>
        </h2>
        <div class="grid md:grid-cols-3 gap-6">
          <div 
            v-for="(leader, index) in leaders"
            :key="leader.name"
            class="bg-white rounded-xl shadow-lg p-6 hover-lift transition-all scroll-item"
            :class="`delay-${index * 100}`"
          >
            <div class="text-4xl mb-4 text-center">{{ leader.icon }}</div>
            <h3 class="text-xl font-semibold text-army-green mb-2 text-center">{{ leader.name }}</h3>
            <p class="text-gray-600 text-center mb-4">{{ leader.position }}</p>
            <div class="text-center">
              <span class="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                {{ leader.status }}
              </span>
            </div>
          </div>
        </div>
      </section>

      <!-- Danh sách cán bộ/chiến sĩ -->
      <section id="can-bo" class="mb-16 scroll-section">
        <h2 class="text-3xl font-bold text-gray-800 mb-8 flex items-center gap-3">
          <span class="text-4xl">👥</span>
          <span class="gradient-text">Danh sách cán bộ/chiến sĩ</span>
        </h2>
        <div class="bg-white rounded-xl shadow-xl overflow-hidden scroll-item">
          <div class="overflow-x-auto">
            <table class="min-w-full divide-y divide-gray-200">
              <thead class="bg-gradient-to-r from-army-green to-green-800">
                <tr>
                  <th 
                    v-for="header in tableHeaders"
                    :key="header"
                    class="px-4 md:px-6 py-4 text-left text-xs font-bold text-white uppercase tracking-wider"
                  >
                    {{ header }}
                  </th>
                </tr>
              </thead>
              <tbody class="bg-white divide-y divide-gray-200">
                <tr
                  v-for="(person, index) in activePersonnel"
                  :key="person.id"
                  class="hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-100 transition-all duration-300"
                  :class="`scroll-item delay-${index * 50}`"
                >
                  <td class="px-4 md:px-6 py-4 whitespace-nowrap">
                    <div class="flex items-center gap-2">
                      <span class="text-lg">👤</span>
                      <div class="text-sm font-medium text-gray-900">{{ person.fullName }}</div>
                    </div>
                  </td>
                  <td class="px-4 md:px-6 py-4 whitespace-nowrap">
                    <div class="text-sm text-gray-900 font-medium">{{ person.rank }}</div>
                  </td>
                  <td class="px-4 md:px-6 py-4 whitespace-nowrap">
                    <div class="text-sm text-gray-900">{{ person.unit || 'Chưa phân công' }}</div>
                  </td>
                  <td class="px-4 md:px-6 py-4 whitespace-nowrap">
                    <div class="text-sm text-gray-900">{{ person.phone || '-' }}</div>
                  </td>
                  <td class="px-4 md:px-6 py-4 whitespace-nowrap">
                    <span
                      :class="{
                        'bg-green-100 text-green-800': person.status === 'Đang hoạt động',
                        'bg-yellow-100 text-yellow-800': person.status === 'Dự bị',
                        'bg-gray-100 text-gray-800': person.status === 'Không hoạt động',
                      }"
                      class="px-3 py-1 text-xs font-semibold rounded-full transition-all"
                    >
                      {{ person.status }}
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <!-- Hoạt động -->
      <section id="hoat-dong" class="mb-16 scroll-section">
        <h2 class="text-3xl font-bold text-gray-800 mb-8 flex items-center gap-3">
          <span class="text-4xl">📸</span>
          <span class="gradient-text">Hoạt động</span>
        </h2>
        
        <!-- Khám Nghĩa vụ Quân sự -->
        <div class="mb-12 scroll-item">
          <h3 class="text-2xl font-semibold text-army-green mb-6 flex items-center gap-2">
            <span>🎯</span> Khám Nghĩa vụ Quân sự
          </h3>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div
              v-for="(image, index) in nvqsImages"
              :key="index"
              class="relative group cursor-pointer overflow-hidden rounded-xl shadow-lg hover-lift transition-all bg-gray-200"
              @click="openImageModal(image)"
            >
              <img
                :src="image"
                :alt="`Khám NVQS ${index + 1}`"
                class="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                @error="handleImageError"
                loading="lazy"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div class="absolute bottom-4 left-4 right-4 text-white">
                  <p class="font-semibold">Khám Nghĩa vụ Quân sự</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Dân quân dọt lụt -->
        <div class="mb-12 scroll-item delay-100">
          <h3 class="text-2xl font-semibold text-army-green mb-6 flex items-center gap-2">
            <span>🌊</span> Dân quân dọt lụt - Phòng chống thiên tai
          </h3>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div
              v-for="(image, index) in lutImages"
              :key="index"
              class="relative group cursor-pointer overflow-hidden rounded-xl shadow-lg hover-lift transition-all bg-gray-200"
              @click="openImageModal(image)"
            >
              <img
                :src="image"
                :alt="`Dân quân dọt lụt ${index + 1}`"
                class="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                @error="handleImageError"
                loading="lazy"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div class="absolute bottom-4 left-4 right-4 text-white">
                  <p class="font-semibold text-sm">Dân quân dọt lụt</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Chức năng nhiệm vụ -->
      <section id="chuc-nang" class="mb-16 scroll-section">
        <h2 class="text-3xl font-bold text-gray-800 mb-8 flex items-center gap-3">
          <span class="text-4xl">⚡</span>
          <span class="gradient-text">Chức năng & Nhiệm vụ</span>
        </h2>
        <div class="grid md:grid-cols-3 gap-6">
          <div 
            v-for="(duty, index) in duties"
            :key="duty.title"
            class="bg-white rounded-xl shadow-lg p-8 hover-lift transition-all border-t-4 scroll-item"
            :class="[duty.borderColor, `delay-${index * 150}`]"
          >
            <div class="text-5xl mb-4 animate-float" :style="{ animationDelay: `${(index + 1) * 0.2}s` }">
              {{ duty.icon }}
            </div>
            <h3 class="text-xl font-semibold text-army-green mb-3">{{ duty.title }}</h3>
            <p class="text-gray-600 leading-relaxed">
              {{ duty.description }}
            </p>
          </div>
        </div>
      </section>

      <!-- Thông tin liên quan -->
      <section id="thong-tin-lien-quan" class="mb-16 scroll-section">
        <h2 class="text-3xl font-bold text-gray-800 mb-8 flex items-center gap-3">
          <span class="text-4xl">🔗</span>
          <span class="gradient-text">Thông tin liên quan</span>
        </h2>
        <div class="grid md:grid-cols-2 gap-6">
          <div class="bg-white rounded-xl shadow-lg p-6 hover-lift scroll-item">
            <h3 class="text-xl font-semibold text-army-green mb-4 flex items-center gap-2">
              <span>📱</span> Kênh Mạng Xã Hội
            </h3>
            <p class="text-gray-700 mb-4">
              <strong>Facebook:</strong> 
              <a 
                href="https://facebook.com/bch.quan.su.phuong.phu.xuan" 
                target="_blank"
                class="text-blue-600 hover:underline"
              >
                facebook.com/bch.quan.su.phuong.phu.xuan
              </a>
            </p>
            <p class="text-gray-600 text-sm">
              Cập nhật hoạt động huấn luyện, trực sẵn sàng chiến đấu, báo cáo hình ảnh công tác PCTT & TKCN, 
              tuyên truyền Luật Nghĩa vụ quân sự.
            </p>
          </div>
          <div class="bg-white rounded-xl shadow-lg p-6 hover-lift scroll-item delay-100">
            <h3 class="text-xl font-semibold text-army-green mb-4 flex items-center gap-2">
              <span>📞</span> Liên hệ
            </h3>
            <div class="space-y-3 text-gray-700">
              <p><strong>Hotline Trực ban:</strong> 0234.3557.575</p>
              <p><strong>Địa chỉ:</strong> Tầng 1, UBND Phường Phú Xuân</p>
              <p><strong>Địa điểm:</strong> 72 Nguyễn Gia Thiều, TP. Huế</p>
            </div>
          </div>
        </div>
      </section>
    </main>

    <!-- Footer -->
    <footer class="bg-gradient-to-r from-army-green to-green-800 text-white mt-16">
      <div class="container mx-auto px-4 py-8">
        <div class="text-center">
          <p class="text-base font-semibold mb-2">
            © 2025 Ban Chỉ Huy Quân Sự Phường Phú Xuân - Thành phố Huế
          </p>
          <p class="text-sm text-gray-200">
            72 Nguyễn Gia Thiều, Phường Phú Xuân, TP. Huế | ĐT: 0234.3557.575
          </p>
          <div class="mt-4 flex justify-center gap-4">
            <a 
              href="https://facebook.com/bch.quan.su.phuong.phu.xuan" 
              target="_blank"
              class="text-2xl hover:scale-125 transition-transform duration-300"
            >
              📘
            </a>
          </div>
        </div>
      </div>
    </footer>

    <!-- Image Modal -->
    <div
      v-if="showImageModal && selectedImage"
      class="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-fade-in"
      @click="closeImageModal"
    >
      <div class="relative max-w-6xl max-h-full">
        <button
          @click="closeImageModal"
          class="absolute -top-12 right-0 text-white text-4xl hover:text-yellow-300 transition-colors"
        >
          ×
        </button>
        <img
          :src="selectedImage"
          alt="Hoạt động"
          class="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
          @click.stop
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { personnel, units, organizationInfo } from '~/data/personnel'
import { onMounted, ref, computed } from 'vue'

const navItems = [
  { id: 'home', label: 'Trang chủ' },
  { id: 'gioi-thieu', label: 'Giới thiệu' },
  { id: 'thong-ke', label: 'Thống kê' },
  { id: 'to-chuc', label: 'Tổ chức' },
  { id: 'lanh-dao', label: 'Lãnh đạo' },
  { id: 'can-bo', label: 'Cán bộ' },
  { id: 'chuc-nang', label: 'Chức năng' },
  { id: 'hoat-dong', label: 'Hoạt động' },
  { id: 'thong-tin-lien-quan', label: 'Thông tin liên quan' }
]

// Banner Slider
const currentSlide = ref(0)
const bannerSlides = [
  {
    image: '/images/banner/571221036_1874072556874755_3137352357692340646_n.jpg',
    title: 'Hoạt động huấn luyện'
  },
  {
    image: '/images/banner/571658877_1874072246874786_7108984142973128265_n.jpg',
    title: 'Phòng chống thiên tai'
  },
  {
    image: '/images/banner/582497471_4183398381900509_7588331551389692439_n.jpg',
    title: 'Sẵn sàng chiến đấu'
  }
]

// Hoạt động - Ảnh NVQS
const nvqsImages = [
  '/images/nvqs/nvqs1.jpg',
  '/images/nvqs/nvqs2.jpg',
  '/images/nvqs/nvqs3.jpg'
]

// Hoạt động - Ảnh Dân quân dọt lụt
const lutImages = [
  '/images/lut/lut1.jpg',
  '/images/lut/lut2.jpg',
  '/images/lut/lut3.jpg',
  '/images/lut/lut4.jpg'
]

const selectedImage = ref<string | null>(null)
const showImageModal = ref(false)

const openImageModal = (image: string) => {
  selectedImage.value = image
  showImageModal.value = true
}

const closeImageModal = () => {
  showImageModal.value = false
  selectedImage.value = null
}

const handleImageError = (event: Event) => {
  const img = event.target as HTMLImageElement
  console.error('Lỗi load ảnh:', img.src)
  // Có thể set một placeholder image nếu cần
}

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % bannerSlides.length
}

const prevSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + bannerSlides.length) % bannerSlides.length
}

// Auto slide
onMounted(() => {
  setInterval(() => {
    nextSlide()
  }, 5000)
})

const activePersonnel = computed(() => {
  return personnel.filter(p => p.status === 'Đang hoạt động' || p.status === 'Dự bị')
})

const stats = computed(() => [
  {
    label: 'Tổng số cán bộ/chiến sĩ',
    value: organizationInfo.totalPersonnel,
    color: 'text-army-green',
    bgColor: 'bg-army-green'
  },
  {
    label: 'Đang hoạt động',
    value: organizationInfo.coreForce,
    color: 'text-blue-600',
    bgColor: 'bg-blue-600'
  },
  {
    label: 'Số đơn vị',
    value: units.length,
    color: 'text-gray-600',
    bgColor: 'bg-gray-600'
  }
])

const leaders = [
  {
    name: 'Lê Văn Hào',
    position: 'Chỉ huy trưởng',
    icon: '👔',
    status: 'Đang hoạt động'
  },
  {
    name: 'Nguyễn Văn A',
    position: 'Phó chỉ huy trưởng',
    icon: '⭐',
    status: 'Đang hoạt động'
  },
  {
    name: 'Trần Văn B',
    position: 'Phó chỉ huy trưởng',
    icon: '⭐',
    status: 'Đang hoạt động'
  }
]

const tableHeaders = ['Họ và tên', 'Cấp bậc', 'Đơn vị', 'Số điện thoại', 'Trạng thái']

const duties = [
  {
    icon: '🎯',
    title: 'Tuyển quân',
    description: 'Rà soát, sơ tuyển và khám tuyển công dân đủ điều kiện nhập ngũ theo quy định. Đảm bảo "Tuyển người nào, chắc người đó".',
    borderColor: 'border-red-500'
  },
  {
    icon: '🎖️',
    title: 'Huấn luyện',
    description: 'Tổ chức huấn luyện dân quân tự vệ hàng năm, giáo dục chính trị, bắn đạn thật, diễn tập phòng thủ, sẵn sàng chiến đấu.',
    borderColor: 'border-blue-500'
  },
  {
    icon: '🌊',
    title: 'Phòng chống thiên tai',
    description: 'Tham gia cứu hộ cứu nạn, di dời dân vùng thấp trũng, chằng chống nhà cửa khi có bão lụt (thường tháng 9-12 tại Huế).',
    borderColor: 'border-green-500'
  }
]

const scrollToSection = (id: string) => {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

// Scroll reveal animation
onMounted(() => {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fade-in-up')
        observer.unobserve(entry.target)
      }
    })
  }, observerOptions)

  // Observe all scroll sections
  document.querySelectorAll('.scroll-section').forEach(section => {
    observer.observe(section)
  })

  document.querySelectorAll('.scroll-item').forEach(item => {
    observer.observe(item)
  })
})
</script>

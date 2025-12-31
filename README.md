# Ban Chỉ Huy Quân Sự Phường Phú Xuân - Portfolio Website

Website giới thiệu về Ban Chỉ Huy Quân Sự Phường Phú Xuân, Thành phố Huế.

## 🛠️ Tech Stack

- **Framework**: Nuxt 3 (Vue 3)
- **Styling**: TailwindCSS
- **Deployment**: GitHub Pages
- **Type**: Static Site (Hardcoded Data)

## 🚀 Cài đặt và Chạy

### Development

```bash
# Cài đặt dependencies
npm install

# Chạy dev server
npm run dev
```

Mở trình duyệt tại: http://localhost:3000

### Build Static Site

```bash
# Generate static files
npm run generate
```

Files sẽ được tạo trong thư mục `.output/public`

## 📦 Deploy lên GitHub Pages

### Cách 1: Tự động (Khuyến nghị)

1. Push code lên GitHub repository
2. Vào Settings > Pages
3. Chọn Source: **GitHub Actions**
4. Mỗi khi push lên `main` branch, GitHub sẽ tự động deploy

### Cách 2: Thủ công

```bash
# Generate static site
npm run generate

# Copy files từ .output/public vào thư mục docs/
cp -r .output/public/* docs/

# Commit và push
git add docs/
git commit -m "Deploy to GitHub Pages"
git push
```

Sau đó vào Settings > Pages và chọn Source: **docs folder**

## 📝 Cập nhật dữ liệu

Dữ liệu được hardcode trong file `data/personnel.ts`. Để cập nhật:

1. Mở file `data/personnel.ts`
2. Chỉnh sửa mảng `personnel` hoặc `units`
3. Build lại: `npm run generate`

## 🎨 Màu sắc chủ đạo

- **Primary (Army Green)**: `#4B5320`
- **Flag Red**: `#DA251D`
- **Military Blue**: `#1E3A8A`

## 📞 Liên hệ

- **Địa chỉ**: Số 394 đường Đinh Tiên Hoàng, Phường Phú Xuân, TP. Huế
- **Điện thoại**: 0234.3557.575
- **Facebook**: facebook.com/bch.quan.su.phuong.phu.xuan

## 📄 License

Dự án này được phát triển cho Ban Chỉ Huy Quân Sự Phường Phú Xuân.

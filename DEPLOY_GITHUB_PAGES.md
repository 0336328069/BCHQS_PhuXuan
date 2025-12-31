# 🚀 Deploy lên GitHub Pages - Đơn giản!

## ⚡ Cách 1: Tự động với GitHub Actions (Khuyến nghị)

### Bước 1: Push code lên GitHub

```bash
# Khởi tạo git (nếu chưa có)
git init

# Thêm remote repository
git remote add origin https://github.com/USERNAME/BCHQS.git

# Commit và push
git add .
git commit -m "Initial commit"
git branch -M main
git push -u origin main
```

### Bước 2: Enable GitHub Pages

1. Vào GitHub repository
2. Vào **Settings** > **Pages**
3. **Source**: Chọn **GitHub Actions**
4. Xong! Mỗi khi push code, GitHub sẽ tự động deploy

### Bước 3: Cấu hình baseURL (nếu cần)

Nếu repository name không phải `BCHQS`, cập nhật `nuxt.config.ts`:

```typescript
app: {
  baseURL: '/TEN-REPO-CUA-BAN/', // Thay bằng tên repo thực tế
  buildAssetsDir: 'assets'
}
```

---

## 📝 Cách 2: Deploy thủ công

### Bước 1: Generate static site

```bash
npm run generate
```

### Bước 2: Tạo branch gh-pages

```bash
# Tạo branch gh-pages từ thư mục dist
git checkout --orphan gh-pages
git rm -rf .
cp -r .output/public/* .
git add .
git commit -m "Deploy to GitHub Pages"
git push origin gh-pages
```

### Bước 3: Enable GitHub Pages

1. Vào Settings > Pages
2. Source: Chọn **gh-pages branch**
3. Xong!

---

## ✅ Kiểm tra

Sau khi deploy, website sẽ có tại:
- `https://USERNAME.github.io/BCHQS/` (nếu dùng subpath)
- Hoặc `https://USERNAME.github.io/` (nếu deploy root)

---

## 🔄 Cập nhật website

Chỉ cần:
1. Sửa code
2. Commit và push lên GitHub
3. GitHub Actions sẽ tự động deploy lại!

---

## 📋 Checklist

- [ ] Đã push code lên GitHub
- [ ] Đã enable GitHub Pages (GitHub Actions)
- [ ] Đã cấu hình baseURL trong `nuxt.config.ts` (nếu cần)
- [ ] Website đã chạy tại GitHub Pages URL

---

## ❓ Troubleshooting

### Website không load được?

- Kiểm tra baseURL trong `nuxt.config.ts` có đúng với repo name không
- Kiểm tra GitHub Actions có chạy thành công không
- Đợi vài phút để GitHub deploy xong

### Assets không load?

- Kiểm tra `buildAssetsDir` trong `nuxt.config.ts`
- Đảm bảo baseURL đúng

### Cần thay đổi dữ liệu?

- Sửa file `data/personnel.ts`
- Commit và push
- GitHub sẽ tự động rebuild và deploy

---

**🎉 Xong! Website của bạn đã được deploy lên GitHub Pages!**


# Lunahan

TR/EN çalışan, kullanıcı onayı olmadan e-posta göndermeyen kişisel AI asistanı MVP'si.

## Çalıştırma
```bash
npm install
cp .env.example .env.local
npm run dev
npm run lint && npm test && npm run build
```

## Kapsam
Responsive landing, onboarding, dashboard, inbox, email detail, düzenlenebilir taslak/onay ve ayarlar; Gmail yokken demo fallback; TR/EN dil seçimi. CI yalnız lint/test/build başarılıysa Pages'e çıkar.

## Gmail güvenlik sınırı
Client secret, access/refresh token ve AI anahtarı tarayıcıya veya repoya konmaz. OAuth authorization-code + PKCE callback/token değişimi ayrı BFF'de yapılır. Tokenlar şifreli, HttpOnly/Secure oturumla tutulur. Önce minimum `gmail.readonly`, taslak için ayrı gerekçeyle `gmail.compose` istenir. Gönderme endpoint'i her istekte açık ve tek kullanımlık kullanıcı onayı doğrular. Loglar token veya mesaj gövdesi içermez; bağlantı kaldırılınca token revoke edilir. Gerçek sırlar backend/GitHub Environment Secrets içinde tutulur.

Mimari: Vite + React SPA, Pages uyumlu hash routing. Gmail ve AI işlemleri ayrı BFF servisinde olmalıdır.

Önizleme: https://lunahanv.github.io/Lunahan/

const tumUrunler = [
    //ANAHTARLIKLAR
    {
        id: 'A1',
        ad: 'Kulaklıklı Anahtarlık',
        fiyat: 750,
        gorseller: [
            '/public/images/A1-a.jpg',
            '/public/images/A1-b.jpg',
            '/public/images/A1-c.jpg'
        ],
        stok: 15,
        kategori: 'anahtarlik',
        aciklama: 'Modern tasarımlar ile karşınıza çıkıyoruz.',
        yenimi: true, 
        indirimlimi: false, 
    },
    {
        id: 'A2',
        ad: 'Saatli Anahtarlık',
        fiyat: 1200,
        gorseller: [
            '/public/images/A2-a.jpg',
            '/public/images/A2-b.jpg',
            '/public/images/A2-c.jpg'
        ],
        stok: 8,
        kategori: 'anahtarlik',
        aciklama: 'Modern tasarımlar ile karşınıza çıkıyoruz.',
        yenimi: false,
        indirimlimi: true, 
    },
    {
        id: 'A3',
        ad: 'Mekanik Klavye Anahtarlık',
        fiyat: 900,
        gorseller: [
            '/public/images/A3-a.jpg',
            '/public/images/A3-b.jpg',
            '/public/images/A3-c.jpg'
        ],
        stok: 20,
        kategori: 'anahtarlik',
        aciklama: 'Dayanıklı mekanik anahtarlar.',
        yenimi: true,
        indirimlimi: false,
    },
    //FİGÜRLER
    {
        id: 'B1',
        ad: 'Batman',
        fiyat: 450,
        gorseller: [
            '/public/images/B1-a.jpg',
            '/public/images/B1-b.jpg',
            '/public/images/B1-c.jpg'
        ],
        stok: 30,
        kategori: 'figur',
        aciklama: 'Dc dünyasının kahramanı.',
        yenimi: true, 
        indirimlimi: false,
    },
    {
        id: 'B2',
        ad: 'Spiderman',
        fiyat: 1500,
        gorseller: [
            '/public/images/B2-a.jpg',
            '/public/images/B2-b.jpg',
            '/public/images/B2-c.jpg'
        ],
        stok: 12,
        kategori: 'figur',
        aciklama: 'Marvel evreninin vazgeçilmez süper kahramanı.',
        yenimi: false,
        indirimlimi: true, 
    },
    {
        id: 'B3',
        ad: 'Dr. Strange',
        fiyat: 300,
        gorseller: [
            '/public/images/B3-a.jpg',
            '/public/images/B3-b.jpg',
            '/public/images/B3-c.jpg'
        ],
        stok: 25,
        kategori: 'figur',
        aciklama: 'O sadece bir doktor değil.',
        yenimi: false,
        indirimlimi: true,
    },
    {
        id: 'B4',
        ad: 'Iron Man',
        fiyat: 15500,
        gorseller: [
            '/public/images/B4-a.jpg',
            '/public/images/B4-b.jpg',
            '/public/images/B4-c.jpg'
        ],
        stok: 5,
        kategori: 'figur',
        aciklama: 'Hurdalıkların efsanesi.',
        yenimi: true, 
        indirimlimi: false,
    },
    // AKSESUAR
    {
        id: 'C1',
        ad: 'Saksılık',
        fiyat: 850,
        gorseller: [
            '/public/images/C1-a.jpg',
            '/public/images/C1-b.jpg',
            '/public/images/C1-c.jpg'
        ],
        stok: 18,
        kategori: 'aksesuar',
        aciklama: 'Daha ergonamik yapısı ile bitkilere güzel bir yaşam.',
        yenimi: true, 
        indirimlimi: false, 
    },
    {
        id: 'C2',
        ad: 'Kulaklık standı',
        fiyat: 2500,
        gorseller: [
            '/public/images/C2-a.jpg',
            '/public/images/C2-b.jpg',
            '/public/images/C2-c.jpg'
        ],
        stok: 7,
        kategori: 'aksesuar',
        aciklama: 'Kulak üstü kulaklıklar için masa üstüneze koyabileceğiniz stand.',
        yenimi: false,
        indirimlimi: true,
    },
    {
        id: 'C3',
        ad: 'Çok Gözlü Çekmece',
        fiyat: 400,
        gorseller: [
            '/public/images/C3-a.jpg',
            '/public/images/C3-b.jpg',
            '/public/images/C3-c.jpg'
        ],
        stok: 40,
        kategori: 'aksesuar',
        aciklama: 'Usblerinizi ve micro disklerinizi koyabilceğiniz çok gözlü cekmeceler.',
        yenimi: false,
        indirimlimi: true, 
    },
    //KOZMETİK
    {
        id: 'D1',
        ad: 'Kolye',
        fiyat: 600,
        gorseller: [
            '/public/images/D1-a.jpg',
            '/public/images/D1-b.jpg',
            '/public/images/D1-c.jpg'
        ],
        stok: 22,
        kategori: 'kozmetik',
        aciklama: 'Güzelliğinize yeni bir güzellik katıcak kolye.',
        yenimi: true, 
        indirimlimi: false,
    },
    {
        id: 'D2',
        ad: 'Bileklik',
        fiyat: 800,
        gorseller: [
            '/public/images/D2-a.jpg',
            '/public/images/D2-b.jpg',
            '/public/images/D2-c.jpg'
        ],
        stok: 10,
        kategori: 'kozmetik',
        aciklama: 'Sade ve şık tasarımı ile ergonomik bileklik.',
        yenimi: false,
        indirimlimi: true, 
    }
];

const aramaInput = document.getElementById('arama-input');
const aramaBtn = document.getElementById('arama-btn');
const kategoriLinkleri = document.querySelectorAll('.kategori-link');
const yeniUrunlerKapsayici = document.getElementById('yeni-urunler-kapsayici');
const IndirimliUrunlerKapsayici = document.getElementById('indirimli-urunler-kapsayici');

// Ürünleri HTML'e render eden yardımcı fonksiyon
function urunKartiOlustur(urun) {
    const urunKarti = document.createElement('div');
    urunKarti.classList.add('urun-karti'); // Stil için bir sınıf ekle

    let badgeHtml = '';
    // Sayfanın main.html olup olmadığını kontrol et
    const isMainPage = window.location.pathname.includes('main.html') || window.location.pathname === '/';

    if (!isMainPage) { // Eğer main.html sayfası DEĞİLSE etiketleri ekle
        if (urun.yenimi) {
            badgeHtml += '<span class="urun-etiket yeni">YENİ</span>';
        }
        if (urun.indirimlimi) {
            badgeHtml += '<span class="urun-etiket indirim">İNDİRİM</span>';
        }
    }

    urunKarti.innerHTML = `
        <img src="${urun.gorseller?.[0]}" alt="${urun.ad}">
            <h3>${urun.ad}</h3>
            <p>Fiyat: ${urun.fiyat} TL</p>
            <button class="sepete-ekle-btn" data-urun-id="${urun.id}">Sepete Ekle</button>
        `;
    return urunKarti;
}

// Yeni ürünleri sayfaya yükle
function yeniUrunleriYukle() {
    const yeniUrunler = tumUrunler.filter(urun => urun.yenimi);
    yeniUrunler.forEach(urun => {
        const urunKarti = urunKartiOlustur(urun);
        if (yeniUrunlerKapsayici) { // Elementin varlığını kontrol et
            yeniUrunlerKapsayici.appendChild(urunKarti);
        }
    });
}
// İndirimli ürünleri sayfaya yükle
function indirimliUrunleriYukle() {
    const indirimliUrunler = tumUrunler.filter(urun => urun.indirimlimi);
    indirimliUrunler.forEach(urun => {
        const urunKarti = urunKartiOlustur(urun);
        if (IndirimliUrunlerKapsayici) { // Elementin varlığını kontrol et
            IndirimliUrunlerKapsayici.appendChild(urunKarti);
        }
    });
}

// Sayfa yüklendiğinde ürünleri göster
document.addEventListener('DOMContentLoaded', () => {
    yeniUrunleriYukle();
    indirimliUrunleriYukle();

    // Diğer sayfalar için (tum-urunler.html, kategori sayfaları vb.)
    // Tüm ürünler sayfası için örnek:
    const tumUrunlerKapsayici = document.getElementById('tum-urunler-kapsayici');
    if (tumUrunlerKapsayici) {
        tumUrunler.forEach(urun => {
            const urunKarti = urunKartiOlustur(urun);
            tumUrunlerKapsayici.appendChild(urunKarti);
        });
    }

    // Kategori sayfaları için dinamik yükleme (örneğin aksesuar.html'de sadece aksesuar ürünlerini gösterir)
    const currentPath = window.location.pathname;
    const kategoriUrunlerKapsayici = document.getElementById('kategori-urunler-kapsayici'); // Tüm kategori sayfalarında kullanabileceğiniz genel bir ID
    
    if (kategoriUrunlerKapsayici) {
        let kategoriFilter = '';
        if (currentPath.includes('aksesuar.html')) {
            kategoriFilter = 'aksesuar';
        } else if (currentPath.includes('anahtarlik.html')) {
            kategoriFilter = 'anahtarlik';
        } else if (currentPath.includes('figur.html')) {
            kategoriFilter = 'figur';
        } else if (currentPath.includes('kozmetik.html')) {
            kategoriFilter = 'kozmetik';
        }

        if (kategoriFilter) {
            const filtrelenmisUrunler = tumUrunler.filter(urun => urun.kategori === kategoriFilter);
            filtrelenmisUrunler.forEach(urun => {
                const urunKarti = urunKartiOlustur(urun);
                kategoriUrunlerKapsayici.appendChild(urunKarti);
            });
        }
    }
})

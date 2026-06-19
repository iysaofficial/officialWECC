import urllib.request
import re

urls = [
    "https://ypalmaarif.sch.id/luar-biasa-siswa-sd-islam-almaarif-02-singosari-raih-medali-di-ajang-internasional-ispc-wecc-dan-glocolis-2026/",
    "https://www.polibatam.ac.id/mahasiswa-polibatam-raih-prestasi-internasional-pada-wecc-2026/",
    "https://industri.unusida.ac.id/2025/09/06/mahasiswa-teknik-industri-unusida-raih-silver-medal-di-ajang-wecc-2025/",
    "https://dinus.ac.id/2025/09/udinus-dan-iysa-gelar-kompetisi-ilmiah-internasional-hadirkan-ratusan-peserta-dari-14-negara/",
    "https://feb.umk.ac.id/2025/silver-medal-business-plan-word-economic-challenge-competition-oleh-indonesia-young-scientist-association-iysa/",
    "https://unnes.ac.id/feb/selamat-dan-sukses-gold-medal-wecc-2024/"
]

req_headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36'
}

for u in urls:
    try:
        req = urllib.request.Request(u, headers=req_headers)
        with urllib.request.urlopen(req, timeout=10) as response:
            html = response.read().decode('utf-8')
            match = re.search(r'<meta property="og:image"\s+content="([^"]+)"', html)
            if not match:
                match = re.search(r'<meta content="([^"]+)"\s+property="og:image"', html)
            if match:
                print(f"{u} -> {match.group(1)}")
            else:
                img_match = re.search(r'<img[^>]+src="([^"]+)"[^>]*class="[^"]*attachment-post-thumbnail', html)
                if img_match:
                     print(f"{u} -> {img_match.group(1)}")
                else:
                     print(f"{u} -> Not found")
    except Exception as e:
        print(f"{u} -> Error: {e}")

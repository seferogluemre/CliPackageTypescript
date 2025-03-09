CLI Tool README
Bu proje, komut satırında çalışan bir araç (CLI) sağlar. Bu araç, çeşitli komutlar ile dosya oluşturma, yeni proje başlatma ve npm build komutlarını çalıştırma gibi işlemleri otomatikleştirir.

Komutlar
create veya c
Bu komut, style.css dosyasını oluşturur ve içerisine bazı temel CSS stilleri ekler. Çalıştırıldığında, mevcut dizinde bir style.css dosyası oluşturulur.

Kullanım:
node <script_adı> create
Alternatif olarak:

node <script_adı> c
build
Bu komut, projenizdeki npm run build komutunu çalıştırır. Bu, genellikle prodüksiyon ortamına derleme işlemi için kullanılır.

Kullanım:

node <script_adı> build
new veya n
Bu komut, yeni bir proje başlatır. Kullanıcıdan proje adı ve GitHub depo URL'si alır ve belirtilen GitHub reposunu belirtilen proje adıyla yerel bir dizine klonlar.

Kullanım:

node <script_adı> new --name <proje_adı> --repo <github_repo_url>
Alternatif olarak, proje adı verilmezse, komut satırından kullanıcıdan proje adı istenecektir.

Örnek:

node <script_adı> new --name MyNewProject --repo https://github.com/username/repository.git
Eğer proje adı --name parametresiyle verilmezse, CLI sizden proje adı ve GitHub repo URL'sini etkileşimli olarak alacaktır.


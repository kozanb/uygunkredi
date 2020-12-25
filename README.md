# uygunkredi
<h1>Enuygun Unoffical Kredi API</h1>

İhtiyaç, Konut, Taşıt olmak üzere 3 farklı tipte kredi sorgulaması yapabilirsiniz. <br>
Geliştirmeye açık olması amacıyla class based geliştirilmiştir. <br>
Veriler enuygun'un kredi bölümünden çekilmektedir. DOM parse edilerek veriler alınmıştır. <br>

<h2>Kullanım</h2>
<p>Örnek kullanım için example.js'e bakabilirsiniz</p><br>
let krediler = new KrediAPI(vade, krediMiktarı, krediTipi);<br>

<h5>Kredi Tipleri</h5><br>
0 -> İhtiyaç<br>
1 -> Taşıt<br>
2 -> Konut<br>

krediler.getCreditList fonksiyonu üzerinden verilere ulaşabilirsiniz.<br>


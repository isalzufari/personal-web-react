import React, { useEffect } from 'react'

const About = () => {
    useEffect(() => {
        document.title = 'About - isalzufari';
    })

    return (
        <>
            <div className="about">
                <h1 className="center-align about-heading">ABOUT</h1>
                <p>Halo, gw adalah seorang yang kebetulan bikin artikel di Blog dan Video di YouTube. Sedang sibuk menikmati hidup dengan cara menjalaninya, biasa di panggil <b>sal</b>. Oiya gw anaknya digital banget wkwk.</p>
                <p>Mulai Ngeblog pada tahun 2014 kira - kira waktu SD gitu deh berawal share Cheat GTA sampe menyimpang ke yang gajelas, sempet mager buat nerusin blog karena pengunjung sepi banget tapi entah kenapa Traffic blog meningkat dan semangat lagi buat Postingan dan tanpa sadar cukup konsisten sampai bisa naik tingkat. Seiring dengan perkembangan, gw juga membuat video di YouTube.</p>
                <p>Sedikit hal tentang blog ini, semua tulisan gw beberapa melihat referensi lain dan sebisa mungkin dikemas dengan serius, tapi ada bercandanya. Karena gw kalo bercanda mukul, gak lah bercanda.</p>
                <p>Blog ini gw sering tulis apa yang ada di pikiran gw aja, biasanya muncul aja gitu sebelum tidur daripada overthink mending jurnaling aja tapi beberapa gw ngak publish.</p>
                <p>Suka dengerin lagu dari Project Pop sampe Taylor Swift. Emang banyak yang sudah bubar sampai ribut sama label sendiri, tapi tidak penting karena yang lebih penting lagunya enak-enak. Suka nonton film, series, gambar, ngegame tapi entah kenapa saat ini udah bosen main game.</p>
                <p>Ladies and Gentleman, sebelum masuk ke bagian selanjutnya, persilakan saya untuk mempersilakan kamu, pembaca blog ini, baik yang baru ataupun baru, baik yang nggak sengaja nge-klik atau memang secara sadar punya insting tertentu: apa pun tujuannya, ya…. jangan macam-macam karena di blog ini ada CCTV nya.</p>

                <h1 className="center-align about-heading">WHAT I DO?</h1>

                <div className="row" id="wid-about">

                    <div className="col l4">
                        <div className="card">
                            <div className="card-image">
                                <img src="/dist/img/video-editor-youtuber.jpg" alt="Youtuber @SiISAL"/>
                                <span className="card-title"><b>Bikin Video</b></span>
                            </div>
                            <div className="card-content">
                                <p>Berawal main game <b>Clash Of Clans</b> jadi suka lah buat Konten Video atau kalo kata orang <b>Kereator</b>, gw menggunakan Platform Youtube isi konten Tutorial Otomotif dan Vlog Gaje kedepannya pasti akan ditingkatkan. Btw lagi turun juga ke <b>Tiktok</b> ini platform gokil sih masih seger banget buat kereator.</p>
                            </div>
                        </div>  
                    </div>
                    <div className="col l4">
                        <div className="card">
                            <div className="card-image">
                                <img src="/dist/img/main-gitar-akustik.jpg" alt="Gitar Akustik @SiISAL"/>
                                <span className="card-title"><b>Main Gitar</b></span>
                            </div>
                            <div className="card-content">
                                <p>Berawal suka lagu <b>Shawn Mendes - Imagination</b> jadi belajar Gitar. Gitar yang gw pake dari Yamaaf dengan seri C-310 itu masuknya gitar klasik kayaknya deh tapi kalo ada duid pengen yang Akustik Listrik biar bisa Record juga. <b>Fun Fact :</b> Belajar pake lagu yang lu suka itu lebih mudah. Coba aja make <b>Am, C, F, G</b> itu udah bisa mainin beberapa lagu populer.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col l4">
                        <div className="card">
                            <div className="card-image">
                                <img src="/dist/img/belajar-hal-baru.jpg" alt="Belajar Hal Baru @SiISAL"/>
                                <span className="card-title"><b>Learn New Things</b></span>
                            </div>
                            <div className="card-content">
                                <p>Bukan <b>Stranger Things</b> yee. Berawal dari awal <b>Covid-19</b> sampe sekarang terus nyobain berbagai macam hal baru, buat saya benefit dari masa covid bikin diri ini lebih berkembang dari yang awalnya melempem. Jika di perhatiin perkembangan dunia tuh cepet banget terutama Teknologi dan Sebagainya. Oiya buat lu yang mageran inget Headline Tokped <b>"Mulai aja dulu"</b> wkwkwk terdengar klise tapi itu ngefekkk.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About

import React from "react"

export default function About() {
    return (
        <div className="container mt-5">
            <h3 className="">Benbilirim Nedir?</h3><hr />
            <p>Benbilirim bir tahmin uygulamasıdır. Uygulamaya giriş yaptıktan sonra sistemde yer alan videolar oynatılmaya başlanır. İlgili videodaki pozisyonun kritik noktalarından birinde pozisyon durur ve video ekranının altında 2 seçenek açılır. Bu esnada 8 saniyelik bir sayaç başlamış olur. 8 saniye içerisinde pozisyonun gidişatına göre gol olup olmadığını tahmin etmeniz istenir. </p>
            <p>Alacağınız veya kaybedeceğiniz puan, sayacın hangi saniyesinde tahmin yaptığınızla doğru orantılıdır. 5. saniyede yapılan bir tahmin eğer doğruysa 5 puan kazandırabileceği gibi, yanlışsa da 5 puan kaybettirecektir.</p>
            <p>Uygulama, denk geldiğim bir televizyon programının benzer formatından esinlenilmiştir. Geliştirmeye destek olmak veya öneride bulunmak için, uygulamanın tüm kaynak kodlarına erişebileceğiniz github hesabımı veya linkedIn profilimi kullanabilirsiniz.</p>
        </div>
    )
}
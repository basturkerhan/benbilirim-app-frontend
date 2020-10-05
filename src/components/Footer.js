import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div className="footer mt-5">
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-md-6">
                            <p className="lead mb-0">benbilirim</p>
                            <p className="small">tahminlerine güvenir misin?</p>
                            <p>Benbilirim uygulaması, futbol sahnelerinden alınmış gerçek görüntüleri en kritik yerde durdurarak pozisyonun devamında gol olup olmadığını tahmin etmenizi sağlar ve tahmin ettiğiniz süreye göre puan verir.</p>
                        </div>

                        <div className="col-md-6">
                            <ul className="footer-list">
                                <li className="footer-list-item"><a className="link" target="_blank" href="https://www.linkedin.com/in/erhanbasturk/" rel="noopener noreferrer">LinkedIn</a></li>
                                <li className="footer-list-item">Github'da Geliştirmeme Destek Ol</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

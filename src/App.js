import React, { useState } from 'react';
import './App.css';
import image from './banner.png';
import image2 from './Colonia1.png';

function Announcement({ content }) {
  return (
    <div className="announcement">
      <p>{content}</p>
    </div>
  );
}

function App() {
  // Array que contiene todos los anuncios
  const announcementsData = [
    { number: 1, content: 'Anuncio #1: parrafo corto que anuncie algo importante' },
    { number: 2, content: 'Anuncio #2: otro anuncio relevante para la comunidad' },
    { number: 3, content: 'Anuncio #3: información adicional que la comunidad debe saber' },
    // Añade más anuncios aquí si es necesario.
  ];

  return (
    <div className="access">
      <header className="header">
        <div className="top-bar">
          <a href="#register">Registro de residente</a> / <a href="#login">Iniciar Sesión</a>
        </div>
        <div className="header-image">
          <img
            src={image}
            alt="Comunidad feliz mirando al frente"
            className="banner-image"
          />
        </div>
      </header>

      <nav className="nav">
        <ul>
          <li><a href="#inicio">Inicio</a></li>
          <li><a href="#pagos">Pagos de la comunidad</a></li>
          <li><a href="#calendario">Calendario de eventos</a></li>
          <li><a href="#contactos">Contactos de emergencia</a></li>
          <li><a href="#foro">Foro residencial</a></li>
        </ul>
      </nav>

      <main className="main-content">
        <section className="about-us">
          <div className="content-wrapper">
            <div className="text-section">
              <h2>Colonia Residencial Los Robles, ¿Quienes somos?</h2>
              <p>
                Aquí puedes inventarte datos sobre la comunidad residencial Los Robles, poner datos geográficos y hablar bien de la comunidad. Podemos inventarlo por ser algo ficticio, es solo para ir rellenando. De preferencia un párrafo o dos de información.
              </p>
            </div>
            <div className="image-section">
              <img
                src={image2}
                alt="Casa de la comunidad Los Robles"
                className="about-image"
              />
            </div>
          </div>
        </section>

        {/* Sección de Anuncios */}
        <section className="announcements-section">
          <h2>Anuncios de la comunidad</h2>
          <div className="announcements">
            {/* Muestra todos los anuncios del array announcementsData */}
            {announcementsData.map((anuncio) => (
              <Announcement key={anuncio.number} content={anuncio.content} />
            ))}
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>Contacto: Ayuntamiento de Los Robles - Teléfono: (123) 456-7890 - Email: contacto@losrobles.com</p>
      </footer>
    </div>
  );
}

export default App;
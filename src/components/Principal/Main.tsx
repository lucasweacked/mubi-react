import { useState } from "react";
import "./Main.css";

export default function Main() {
  const [isFavorito, setIsFavorito] = useState(false);

  const toggleFavorito = () => {
    setIsFavorito((prev) => !prev);
  };

  return (
    <>
      <main className="principal">
        <section className="principal__conteudo">
          <section className="principal__conteudo__filme">
            <img
              src="./img/film/her.png"
              alt="Her Film"
              className="principal__conteudo__imagem"
            />
            <a
              href="https://pt.wikipedia.org/wiki/Her"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="./img/film/her-logo.png"
                alt="Logo"
                className="principal__conteudo__imagem__logo"
                draggable="false"
              />
            </a>
            <p className="principal__conteudo__imagem__paragrafo">
              Em um futuro próximo, Theodore Twombly, um homem solitário,
              desenvolve um relacionamento com um sistema operacional de
              inteligência artificial chamado Samantha. A história explora os
              limites entre a tecnologia e as emoções humanas, desafiando
              questões sobre a natureza do amor e da conexão em um mundo
              altamente digitalizado.
            </p>

            <section className="principal__conteudo__imagem__botao">
              <button className="principal__conteudo__imagem__botao__play">
                <i className="ri-play-fill"></i>
                ASSISTIR
              </button>
              <button
                className={`principal__conteudo__imagem__botao__fav ${
                  isFavorito ? "favorito" : ""
                }`}
                onClick={toggleFavorito}
              >
                <i className={isFavorito ? "ri-check-line" : "ri-add-line"}></i>
              </button>
            </section>
          </section>
        </section>
      </main>
    </>
  );
}

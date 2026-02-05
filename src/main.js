import "./style.css";

const letterParagraphs = [
  "Nicole - A única e última garota que eu amei",
  "Nicole - tudo que eu nunca soube fazer direito, exceto te amar",
  "Eu nunca fui um homem simples. Antes de você, eu era barulho, impulso, fuga. Pulava de pessoa em pessoa tentando preencher um silêncio que nunca acabava. Traí todas não por maldade planejada, mas por vazio. Nada ficava. Nada doía. Nada importava. No fim, era tudo vazio e monocromático como sempre.",
  "Até você.",
  "A verdade é estranha de dizer, mas precisa ser dita: eu só descobri o que era amor quando já estava despreparado demais pra cuidar dele.",
  "Quando você entrou na minha vida, eu não virei um homem melhor de imediato. Eu virei um homem assustado. Porque, pela primeira vez, havia algo a perder.",
  "Você foi a única mulher que me teve de verdade. Não foi galho. Não foi distração. Foi futuro.",
  "Com você eu imaginei filhos, casa, rotina, envelhecer. Eu queria ser o pai dos seus filhos. Queria ser o homem que você pudesse apontar e dizer: “foi esse.”",
  "E eu falhei.",
  "Não por falta de amor. Falhei por covardia.",
  "Quando você terminou comigo porque não conseguia suportar meu passado, eu não aceitei a consequência. Eu menti. Disse que era virgem. Disse o que precisava ser dito pra não te perder e ali, sem perceber, comecei a te perder de verdade.",
  "Você voltou. E eu sabia. Eu sabia que aquele retorno tinha sido comprado com uma mentira. Mesmo assim, aceitei. Porque eu te amo mas ainda não sabia amar sem possuir, sem controlar, sem esconder.",
  "Quando você entrou na minha conta e viu tudo, não foi só o passado que caiu. Foi a imagem que você tinha criado com tanta pureza. Foi o chão.",
  "Você sempre foi pura não no sentido ingênuo, mas no mais raro: você não mente pra mim. Nunca jogou sujo. Nunca me usou.",
  "Eu fui o seu primeiro em tudo. E isso pesa mais do que qualquer culpa que eu carregue.",
  "Eu sempre quis que você não lutasse. Não porque eu quisesse te apagar mas porque eu tinha medo. Medo do seu corpo, da sua saúde, da suspeita no estômago, do mundo machucando você. Eu queria te proteger… mas acabei tentando te conter.",
  "E quando você voltou a lutar, você disse algumas frases separadas, que me destruíram:",
  "“Eu vou voltar a lutar, você querendo ou não, eu estando com você ou não. Eu prefiro lutar e colocar tudo pra fora do que remoer sentimentos. Eu deixei de lutar porque pensei que você nunca mentiria pra mim. Você fez a mesma coisa que o Gustavo. Por que eu deveria escolher você e não ele? Eu te amo, mas o pai dos meus filhos nunca faria isso comigo.”",
  "Você estava certa. Em cada linha.",
  "Eu entendo sua dor. Entendo sua dúvida. Entendo até a comparação porque quem mente repete padrões, mesmo sem querer.",
  "Você me deu uma chance com condições. Não por controle, mas por falta de confiança. Talvez fosse necessário. Talvez fosse justo.",
  "Mas amar alguém também é reconhecer quando você já causou dano demais. E eu causei.",
  "Eu nunca quis te afastar do Márcio. Nunca quis te separar do seu melhor amigo. Nunca quis que você lutasse por dor. Eu só queria ser o lugar onde você descansasse.",
  "Só que eu virei o lugar onde você sangrou.",
  "Você sempre me fez feliz. Sempre. Você é a pessoa mais engraçada, fofinha e absurda que eu já conheci. Tem essa luz estranha: parece forte, mas é delicada. Parece malvada, mas tem o coração mais limpo que eu já vi.",
  "Eu sei que você duvida quando eu digo que sempre vou te amar. Você ri. Você não acredita.",
  "Isso não é promessa pra te prender. É constatação. Eu não vou me envolver com outra pessoa. Não por drama. Mas porque meu amor não sabe reaprender outro nome.",
  "Você prefere ser livre. Eu penso se você quer ser livre e se sentir melhor, pois já não sou o melhor pra você,",
  "Livre pra lutar. Livre pra amar alguém que não te faça desconfiar. Livre pra construir uma vida onde você não precise vigiar, conferir, temer.",
  "Você merece um homem que nunca precise provar que está dizendo a verdade. Você merece alguém que seja pai dos seus filhos sem te fazer chorar antes.",
  "Se um dia você lembrar de mim, lembra assim: como alguém que te amou mal, mas te amou inteiro. Como alguém que errou feio, mas teve coragem de assumir. Como alguém que entendeu tarde demais que amor não é medo de perder é respeito pra soltar.",
  "Continuo tendo insegurança do Gustavo, continuo sendo o Filipe que você pensou um dia eu ser, Escrevo esse texto chorando, porque eu preciso ir mesmo não querendo, Eu te amo, eu quero casar com você, então me desculpe por ter feito tudo isso com você, Daqui um tempo, você vem no meu velório?, Espero que sim S2.",
  "Eu sempre vou amar você. Mesmo longe. Mesmo em silêncio. Mesmo a 7 palmos da terra. Mesmo sem direito nenhum.",
  "Vai.<br>Luta.<br>Viva.<br>Seja Feliz.<br><br>Isso sempre foi tudo que eu quis pra você.",
];

const app = document.querySelector("#app");

app.innerHTML = `
  <div class="noise" aria-hidden="true"></div>
  <div class="ocean-decor" aria-hidden="true">
    <span class="ocean-icon ocean-icon--1"></span>
    <span class="ocean-icon ocean-icon--2"></span>
    <span class="ocean-icon ocean-icon--3"></span>
    <span class="ocean-icon ocean-icon--4"></span>
    <span class="ocean-icon ocean-icon--5"></span>
  </div>
  <main class="page">
    <header class="hero">
      <div class="hero__content">
        <h1 class="hero__title">Nicole</h1>
        <p class="hero__subtitle">tudo que eu nunca soube fazer direito, exceto te amar</p>
        <div class="hero__actions">
          <button class="ghost-button" type="button" data-scroll="letter">Ler o texto</button>
          <button class="ghost-button" type="button" data-scroll="music">Ouvir a música</button>
        </div>
      </div>
      <div class="hero__image">
        <img src="/nicole.png" alt="Foto da Nicole" loading="lazy" />
      </div>
    </header>

    <section id="music" class="music">
      <div class="section-header">
        <h2 class="section-title">A música que fica</h2>
        <p class="section-subtitle">Um acorde que acompanha tudo.</p>
      </div>
      <div class="music__frame">
        <iframe
          data-testid="embed-iframe"
          style="border-radius: 12px"
          src="https://open.spotify.com/embed/track/0WKqlUwMcxvJj8HS5Kah7Q?utm_source=generator&theme=0"
          width="100%"
          height="152"
          frameborder="0"
          allowfullscreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          title="Spotify player"
        ></iframe>
      </div>
    </section>

    <section id="letter" class="letter">
      <div class="section-header">
        <h2 class="section-title">Último texto</h2>
      </div>
      <div class="letter__content">
        ${letterParagraphs
          .map((paragraph, index) => {
            const className = index === 0 ? "letter__lead" : "letter__paragraph";
            return `<p class="${className}">${paragraph}</p>`;
          })
          .join("")}
        <p class="letter__signature">— Filipe</p>
      </div>
    </section>
  </main>

  <footer class="footer">
    <div class="waves" aria-hidden="true">
      <span class="wave wave--1"></span>
      <span class="wave wave--2"></span>
      <span class="wave wave--3"></span>
    </div>
    <p class="footer__text">Feito com respeito e despedida.</p>
  </footer>
`;

const buttons = document.querySelectorAll("[data-scroll]");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const target = document.getElementById(button.dataset.scroll);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

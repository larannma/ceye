function Start ({onButtonClick}) {
    return (
      <section className="start">
        <div className="start__poligonPurple"></div>
        <div className="start__poligonWhite"></div>
        <div className="start__poligonHeader"></div>
        <div className="start__info">
            <h1 className="start__name">Name App</h1>
            <p className="start__subtitle">for sorting video content</p>
            <button onClick={onButtonClick} className="start__button">TRY</button>
        </div>
      </section>
    );
}

export default Start;
function Main ({onDataSent}) {
    return (
      <div className="root__section params__container">
        <h1 className="params__header">введите параметры</h1>
        <div className="params">
          <form onSubmit={ onDataSent }>
            <div className="params__main">
              <div className="params__resolutionContainer">
                <p className="params__title">Resolution</p>
                <input type='number' required className="params__resolution params__resolution_first"></input>
                <p>X</p>
                <input type='number' required className="params__resolution params__resolution_second"></input>
                <p>px</p>
              </div>
              <div className="params__fpsContainer">
                <p>FPS</p>
                <input type='number' required className="params__resolution params__resolution_fps"></input>
                <p>кадр/сек</p>
              </div>
              <button  type='submit' className="params__button">АНАЛИЗ</button>
            </div>
          </form>
          <div className="params__info">
            <p>Resolution - размер файла в пикселях</p>
            <p>FPS - частота кадров</p>
          </div>
        </div>
      </div>
    );
}

export default Main;
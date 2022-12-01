import { contents } from "../../assets/translate/contents";
import { useLanguage } from "../../hooks/UseLanguage/useLanguage";
import { ThemeProvider, useTheme } from "../../hooks/UseTheme/UseTheme";

export function Configuration(){

  const { theme, changeTheme} = useTheme()
  const { currentLanguage, changeCurrentLanguage } = useLanguage()

  console.log(theme)
  return(
    <>
      <div>
        <section>
          <h1>{contents.configurationComponent.title[currentLanguage]}</h1>
          <div>
            <label htmlFor="light">Claro</label>
            <input type="radio" name="theme" id="light" checked={theme === 'light'} onChange={() => changeTheme('light')} />
          </div>
          <div>
            <label htmlFor="dark">Escuro</label>
            <input type="radio" name="theme" id="dark" checked={theme === 'dark'} onChange={() => changeTheme('dark')} />
          </div>
        </section>
        <section>
          <h1>Escolher Linguagem</h1>
          <div>
            <label htmlFor="language">Linguagem</label>
            <select
              id="language"
              onChange={event => changeCurrentLanguage(event.target.value)}
              value={currentLanguage}
              >
                <option value="portuguese">Portugues</option>
                <option value="english">English</option>

            </select>
          </div>
        </section>
      </div>
    </>
  )
}

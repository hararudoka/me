import React from 'react'
import figlet, { defaults } from 'components/figlet/lib/figlet'

export class Figlet extends React.Component {
  componentDidMount (): void {
    if (window.location.protocol === 'file:') {
      alert('fetch APi does not support file: protocol.')
    }

    figlet.defaults({
      fontPath: '../../fonts'
    })

    // figlet.preloadFonts(['Standard', 'Ghost'], function () {
    //   console.log('prefetching done (only did it for 2 fonts)!')
    // })

    /*
  Generates the put
*/
    const update = function (): void {
      // @ts-expect-error
      const fontName = document.querySelector('#font option:checked').value
      // @ts-expect-error
      const inputText = document.querySelector('#inputText').value
      // @ts-expect-error
      const vLayout = document.querySelector('#vLayout option:checked').value
      // @ts-expect-error
      const hLayout = document.querySelector('#hLayout option:checked').value
      // @ts-expect-error
      const width = document.querySelector('#width option:checked').value
      // @ts-expect-error
      const whitespaceBreak = document.querySelector('#whitespaceBreak option:checked').value

      /*
      How to use the text output.

      The below call could also have been: figlet.text(...
  */
      figlet(
        inputText,
        {
          font: 'Px437_IBM_EGA8.otf',
          horizontalLayout: hLayout,
          verticalLayout: vLayout,
          width: width === 'none' ? undefined : width,
          whitespaceBreak: width === 'none' ? undefined : whitespaceBreak === 'true'
        },
        function (err: any, text: string) {
          if (err != null) {
            console.log('something went wrong...')
            console.dir(err)
            return
          }
          // @ts-expect-error
          document.querySelector('#outputFigDisplay').innerHTML = '<pre>' + text + '</pre>'
        }
      )

      /*
      How to read the metadata for a font
  */
      /*
  figlet.metadata(fontName, function(err, options, headerComment) {
      if (err) {
          console.log('something went wrong...');
          console.dir(err);
          return;
      }
      console.dir(options);
      console.log(headerComment);
  });
  */
    }

    /*
  GUI Controls
*/
    // @ts-expect-error
    document.querySelector('#hLayout').addEventListener('change', update)
    // @ts-expect-error
    document.querySelector('#vLayout').addEventListener('change', update)
    // @ts-expect-error
    document.querySelector('#font').addEventListener('change', update)
    // @ts-expect-error
    document.querySelector('#inputText').addEventListener('keyup', update)
    // @ts-expect-error
    document.querySelector('#width').addEventListener('change', update)
    // @ts-expect-error
    document.querySelector('#whitespaceBreak').addEventListener('change', update)

    // update() // init
  }

  render (): JSX.Element {
    return (
      <>
        <div>
          <label htmlFor="font">Font:</label>
          <select id="font">
            <option value="3D Diagonal">3D Diagonal</option>
            <option value="Dancing Font">Dancing Font</option>
            <option value="Ghost">Ghost</option>
            <option value="Graffiti">Graffiti</option>
            <option value="Patorjk's Cheese">Patorjks Cheese</option>
            <option value="Standard" selected>
              Standard
            </option>
            <option value="Pagga">Pagga</option>
            <option value="Pawp">Pawp</option>
          </select>
        </div>

        <div>
          <label htmlFor="hLayout">Horizontal Layout:</label>
          <select id="hLayout">
            <option value="default" selected>
              Default
            </option>
            <option value="full">Full</option>
            <option value="fitted">Fitted</option>
            <option value="controlled smushing">Controlled Smushing</option>
            <option value="universal smushing">Universal Smushing</option>
          </select>
        </div>

        <div>
          <label htmlFor="vLayout">Vertical Layout:</label>
          <select id="vLayout">
            <option value="default" selected>
              Default
            </option>
            <option value="full">Full</option>
            <option value="fitted">Fitted</option>
            <option value="controlled smushing">Controlled Smushing</option>
            <option value="universal smushing">Universal Smushing</option>
          </select>
        </div>

        <div>
          <label htmlFor="width">Width:</label>
          <select id="width">
            <option value="none">none</option>
            <option value="40" selected>
              40
            </option>
            <option value="41">41</option>
            <option value="42">42</option>
            <option value="43">43</option>
            <option value="44">44</option>
            <option value="45">45</option>
            <option value="80">80</option>
            <option value="81">81</option>
            <option value="100">100</option>
          </select>
        </div>

        <div>
          <label htmlFor="whitespaceBreak">Break on Whitespace (if width set):</label>
          <select id="whitespaceBreak">
            <option value="false">false</option>
            <option value="true" selected>
              true
            </option>
          </select>
        </div>

        <div>
          <label htmlFor="inputText">Input:</label>
        </div>
        <textarea id="inputText" style={{ height: 100, width: 200 }}>
          test 123
        </textarea>
        <p></p>
        <div>
          <label htmlFor="outputFigDisplay">Output</label>
        </div>
        <pre>0000000000111111111122222222223333333333444444444455555555556666666666777777777788888888889999999999</pre>
        <div id="outputFigDisplay"></div>

        <script type="text/javascript" src="../../lib/figlet.js?1"></script>
      </>
    )
  }
}

/*
  Style Guide
*/

import { Link } from "react-router-dom";
import ColourSwatch from "../components/style-guide/ColourSwatch";
import placeholder from "../images/image_placeholder.png";
import "../css/normalize.css";
import "../css/variables.css";
import "../css/main.css";
import "../css/style-guide.css";

function StyleGuide() {
  return (
    <div>
      <header>
        <div>
          <div class="header-title">
            <h1 class="text-white">portfolio style guide</h1>
            <p class="yarndings text-white">u</p>
          </div>

          <div class="header-details">
            <nav>
              <ul>
                <li>
                  <a href="#colour-text-section">Colour & Text Styles</a>
                </li>
                <li>
                  <a href="#text-image-form-section">
                    Text, Image & Form Elements
                  </a>
                </li>
                <li>
                  <a href="#card-section">Card Elements</a>
                </li>
                <li>
                  <a href="#templates-section">Templates</a>
                </li>
                <li>
                  <a href="#citations-section">Citations</a>
                </li>
                <li>
                  <a
                    href="https://github.com/biancadimaano/iat339-portfolio"
                    target="_blank"
                  >
                    GitHub
                  </a>
                </li>
              </ul>
            </nav>
            <p class="text-white">Bianca Dimaano / IAT339 Fall 2026</p>
          </div>
        </div>
      </header>

      {/* Ethos */}
      <section id="ethos-section">
        <div class="section-header">
          <h2 class="redaction">ethos</h2>
          <p class="yarndings">Y</p>
        </div>

        {/* Colours */}
        <div class="example last">
          <div>
            <p class="paragraph">
              I'm a product designer with a developer's mindset and a creative
              perspective. I enjoy turning complex problems into intuitive
              experiences, exploring how technology can bring ideas to life, and
              adding thoughtful details that make products engaging and
              delightful to use.
            </p>
            <p class="paragraph">
              Inspired by interactive experiences and video games, I value
              products that are not only functional but also enjoyable to
              explore. With the ability to both design and code, I bring a
              unique perspective to the product development process, bridging
              creative ideas with technical possibilities to create experiences
              that are thoughtful, engaging, and feasible to build.
            </p>
          </div>
        </div>
      </section>
      {/* Ethos */}

      {/* Colour & Text Styles */}
      <section id="colour-text-section">
        <div class="section-header">
          <h2 class="redaction">colour & text styles</h2>
          <p class="yarndings">Y</p>
        </div>

        {/* Colours */}
        <div class="example">
          <h3>Colours</h3>
          <div>
            {/* Pink Swatches */}
            <div class="colour-swatch-row">
              <ColourSwatch
                colour_name="pink-100"
                hexcode="#FBE4F2"
                text_colour="accent"
              />
              <ColourSwatch
                colour_name="pink-200"
                hexcode="#FFA8F4"
                text_colour="accent"
              />
              <ColourSwatch
                colour_name="pink-300"
                hexcode="#89397F"
                text_colour="white"
              />
              <ColourSwatch
                colour_name="pink-400"
                hexcode="#47123E"
                text_colour="white"
              />
              <ColourSwatch
                colour_name="pink-500"
                hexcode="#2B0424"
                text_colour="white"
              />
            </div>

            {/* Neutral Swatches */}
            <div class="colour-swatch-row">
              <ColourSwatch
                colour_name="neutral-100"
                hexcode="#FFFFFF"
                text_colour="primary"
              />
              <ColourSwatch
                colour_name="neutral-200"
                hexcode="#F5F5F5"
                text_colour="primary"
              />
              <ColourSwatch
                colour_name="neutral-300"
                hexcode="#CCCCCC"
                text_colour="primary"
              />
              <ColourSwatch
                colour_name="neutral-400"
                hexcode="#888888"
                text_colour="white"
              />
              <ColourSwatch
                colour_name="neutral-500"
                hexcode="#1B1B1B"
                text_colour="white"
              />
            </div>
          </div>

          <h4>CSS Styles</h4>
          <code>
            <p>color: var(--pink-100);</p>
            <p>color: var(--pink-200);</p>
            <p>color: var(--pink-300);</p>
            <p>color: var(--pink-400);</p>
            <p>color: var(--pink-500);</p>
            <p>color: var(--neutral-100);</p>
            <p>color: var(--neutral-200);</p>
            <p>color: var(--neutral-300);</p>
            <p>color: var(--neutral-400);</p>
            <p>color: var(--neutral-500);</p>
          </code>
        </div>
        {/* --- Colours */}

        {/* Typefaces */}
        <div class="example">
          <h3>Typefaces</h3>
          <div class="typeface-list">
            <div class="typeface redaction">
              <p class="display-text redaction">Redaction 20 Italic</p>
              <p>display</p>
            </div>

            <div class="typeface geist">
              <p class="heading-text">Geist Medium</p>
              <p>heading, emphasis</p>
            </div>

            <div class="typeface geist">
              <p class="body-text">Geist Light</p>
              <p>body, captions</p>
            </div>
          </div>

          <h4>CSS Styles</h4>
          <code>
            <p>font-family: 'Redaction'</p>
            <p>font-style: italic </p> <br />
            <p>font-family: 'Geist'</p>
            <p>font-weight: 500 </p> <br />
            <p>font-family: 'Geist'</p>
            <p>font-weight: 300 </p>
          </code>
        </div>
        {/* --- Typefaces */}

        {/* Typography */}
        <div class="example">
          <h3>Typography</h3>
          <div class="typography-list">
            <h1 class="text-accent">heading 1</h1>
            <h2 class="text-accent">heading 2</h2>
            <h3 class="text-accent">heading 3</h3>
            <h4 class="text-accent">heading 4</h4>
            <h5 class="text-accent">heading 5</h5>
          </div>

          <h4>HTML Code</h4>
          <code>
            <p>&lt;h1&gt;heading 1&lt;/h1&gt;</p>
            <p>&lt;h2&gt;heading 2&lt;/h2&gt;</p>
            <p>&lt;h3&gt;heading 3&lt;/h3&gt;</p>
            <p>&lt;h4&gt;heading 4&lt;/h4&gt;</p>
            <p>&lt;h5&gt;heading 5&lt;/h5&gt;</p>
          </code>
        </div>
        {/* --- Typography */}

        {/* Heading & Paragraph */}
        <div class="example last">
          <h3>Eyebrow, Heading & Paragraph</h3>
          <div class="content-block">
            <p class="eyebrow">Eyebrow Label</p>
            <h3 class="heading">This is a heading.</h3>
            <div class="paragraphs container">
              <p class="paragraph">
                Lorem ipsum dolor sit amet consectetur. Netus nisi leo eu
                integer felis. Montes cursus diam ut velit sollicitudin aliquet
                nulla dolor bibendum. Non vel gravida molestie tortor
                vestibulum. Sit est lectus magna enim morbi mattis. Ipsum fames
                placerat et nullam. Tellus quis hac nisi tortor proin egestas
                lacus fringilla.
              </p>
              <p class="paragraph">
                Lorem ipsum dolor sit amet consectetur. Netus nisi leo eu
                integer felis. Montes cursus diam ut velit sollicitudin aliquet
                nulla dolor bibendum. Non vel gravida molestie tortor
                vestibulum. Sit est lectus magna enim morbi mattis. Ipsum fames
                placerat et nullam. Tellus quis hac nisi tortor proin egestas
                lacus fringilla.
              </p>
            </div>
          </div>

          <h4>HTML Code</h4>
          <code>
            <p>&lt;div class="content-block"&gt;</p>
            <p class="indent">
              &lt;p class="eyebrow"&gt;Eyebrow Label&lt;/p&gt;
            </p>
            <p class="indent">
              &lt;h3 class="heading"&gt;This is a heading.&lt;/h3&gt;
            </p>
            <p class="indent">&lt;div class="paragraphs container&gt;</p>
            <p class="indent-2">&lt;p class="paragraph"&gt;</p>
            <p class="indent-3">
              Lorem ipsum dolor sit amet consectetur. Netus nisi leo eu integer
              felis. Montes cursus diam ut velit sollicitudin aliquet nulla
              dolor bibendum. Non vel gravida molestie tortor vestibulum. Sit
              est lectus magna enim morbi mattis. Ipsum fames placerat et
              nullam. Tellus quis hac nisi tortor proin egestas lacus fringilla.
            </p>
            <p class="indent-2">&lt;/p&gt;</p>
            <p class="indent-2">&lt;p class="paragraph"&gt;</p>
            <p class="indent-3">
              Lorem ipsum dolor sit amet consectetur. Netus nisi leo eu integer
              felis. Montes cursus diam ut velit sollicitudin aliquet nulla
              dolor bibendum. Non vel gravida molestie tortor vestibulum. Sit
              est lectus magna enim morbi mattis. Ipsum fames placerat et
              nullam. Tellus quis hac nisi tortor proin egestas lacus fringilla.
            </p>
            <p class="indent-2">&lt;/p&gt;</p>
            <p class="indent">&lt;/div&gt;</p>
            <p>&lt;/div&gt;</p>
          </code>
        </div>
        {/* --- Heading & Paragraph */}
      </section>
      {/* --- Colour & Text Styles */}

      {/* Text, Image, Form Elements */}
      <section id="text-image-form-section">
        <div class="section-header">
          <h2 class="redaction">text, image & form elements</h2>
          <p class="yarndings">Y</p>
        </div>

        {/* In-text Link */}
        <div class="example">
          <h3>In-text Link</h3>
          <div>
            <p>
              This is an <a href="">in-text link</a> example.
            </p>
          </div>

          <h4>HTML Code</h4>
          <code>
            <p>&lt;p&gt;This is an&lt;/p&gt;</p>
            <p class="indent">&lt;a href=""&gt;in-text link&lt;/a&gt;</p>
            <p>&lt;p&gt;example.&lt;/p&gt;</p>
          </code>
        </div>
        {/* --- In-text Link */}

        {/* Buttons */}
        <div class="example">
          <h3>Buttons</h3>
          <div class="button-container">
            <button class="primary">Primary Button</button>
            <button class="secondary">Secondary Button</button>
            <button class="outline">Outline Button</button>
            <button class="flat">Flat Button</button>
          </div>

          <h4>HTML Code</h4>
          <code>
            <p>&lt;button class="primary"&gt;Primary Button &lt;/button&gt;</p>
            <p>
              &lt;button class="secondary"&gt;Secondary Button &lt;/button&gt;
            </p>
            <p>&lt;button class="outline"&gt;Outline Button &lt;/button&gt;</p>
            <p>&lt;button class="flat"&gt;Flat Button &lt;/button&gt;</p>
          </code>
        </div>
        {/* --- Buttons */}

        {/* Image */}
        <div class="example">
          <h3>Image</h3>
          <div>
            <figure>
              <img src={placeholder} alt="This text describes the image." />
              <figcaption>This is a caption.</figcaption>
            </figure>
          </div>

          <h4>HTML Code</h4>
          <code>
            <p>&lt;figure&gt;</p>
            <p class="indent">
              &lt;img src={"{placeholder}"} alt="This text describes the
              image."/&gt;
            </p>
            <p class="indent">&lt;figcaption&gt;</p>
            <p class="indent-2">This is a caption.</p>
            <p class="indent">&lt;/figcaption&gt;</p>
            <p>&lt;/figure&gt;</p>
          </code>
        </div>
        {/* --- Image */}

        {/* Put Text Inputs and Text Area Inputs */}
      </section>
      {/* --- Text, Image, Form Elements */}

      {/* Card Elements */}
      <section id="card-section">
        <div class="section-header">
          <h2 class="redaction">card elements</h2>
          <p class="yarndings">Y</p>
        </div>

        {/* Project Card */}
        <div class="example last">
          <h3>Project Card</h3>
          <div class="projects-list">
            <a href="">
              <div class="project-card">
                <figure>
                  <img src={placeholder} alt="This text describes the image." />
                </figure>

                <div class="project-details">
                  <h3>Project Name</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Netus nisi leo eu
                    integer felis. Montes cursus diam ut velit sollicitudin
                    aliquet nulla dolor.
                  </p>
                </div>
              </div>
            </a>

            <a href="">
              <div class="project-card">
                <figure>
                  <img src={placeholder} alt="This text describes the image." />
                </figure>

                <div class="project-details">
                  <h3>Project Name</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Netus nisi leo eu
                    integer felis. Montes cursus diam ut velit sollicitudin
                    aliquet nulla dolor.
                  </p>
                </div>
              </div>
            </a>
          </div>

          <h4>HTML Code</h4>
          <code>
            <p>&lt;a href=""&gt;</p>
            <p class="indent">&lt;div class="project-card"&gt;</p>
            <p class="indent-2">&lt;figure&gt;</p>
            <p class="indent-3">
              &lt;img src={"{placeholder}"} alt="This text describes the
              image."/&gt;
            </p>
            <p class="indent-3">&lt;figcaption&gt;</p>
            <p class="indent-4">This is a caption.</p>
            <p class="indent-2">&lt;/figure&gt;</p>
            <br />
            <p class="indent-2">&lt;div class="project-details"&gt;</p>
            <p class="indent-3">&lt;h3&gt;Project Name&lt;/h3&gt;</p>
            <p class="indent-3">
              &lt;p&gt;Lorem ipsum dolor sit amet consectetur. Netus nisi leo eu
              integer felis. Montes cursus diam ut velit sollicitudin aliquet
              nulla dolor.&lt;/p&gt;
            </p>
            <p class="indent-2">&lt;/div&gt;</p>
            <p class="indent">&lt;/div&gt;</p>
            <p>&lt;/a&gt;</p>
          </code>
        </div>
        {/* --- Project Card */}

        {/* Put Contact Cards */}
      </section>

      {/* Templates */}
      <section id="templates-section">
        <div class="section-header">
          <h2 class="redaction">templates</h2>
          <p class="yarndings">Y</p>
        </div>

        <div class="example templates last">
          <Link to="/template/homepage">
            <button class="outline">Template 1</button>
          </Link>
        </div>
      </section>
      {/* --- Templates */}

      {/* Citations */}
      <section id="citations-section">
        <div class="section-header">
          <h2 class="redaction">citations</h2>
          <p class="yarndings">Y</p>
        </div>

        <div class="example citations last">
          <div>
            <p>Redaction 20</p>
            <a href="https://fonts.google.com/specimen/Redaction+20?preview.script=Latn">
              https://fonts.google.com/specimen/Redaction+20?preview.script=Latn
            </a>
          </div>

          <div>
            <p>Geist</p>
            <a href="https://fonts.google.com/specimen/Geist?query=geist">
              https://fonts.google.com/specimen/Geist?query=geist
            </a>
          </div>

          <div>
            <p>Geist Mono</p>
            <a href="https://fonts.google.com/specimen/Geist+Mono?query=geist+mono">
              https://fonts.google.com/specimen/Geist+Mono?query=geist+mono
            </a>
          </div>

          <div>
            <p>Yarndings 20</p>
            <a href="https://fonts.google.com/specimen/Yarndings+20?query=yarndings+20&preview.script=Latn">
              https://fonts.google.com/specimen/Yarndings+20?query=yarndings+20&preview.script=Latn
            </a>
          </div>

          <div>
            <p>MDN Web Docs</p>
            <a href="https://developer.mozilla.org/en-US/">
              https://developer.mozilla.org/en-US/
            </a>
          </div>

          <div>
            <p>W3Schools</p>
            <a href="https://www.w3schools.com/">https://www.w3schools.com/</a>
          </div>
        </div>
      </section>
      {/* --- Citations */}
    </div>
  );
}

export default StyleGuide;

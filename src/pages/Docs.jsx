import React from 'react';
import styles from './Docs.module.scss';
import CopyBtn from '../components/common/copyBtn';

const Docs = () => {
  const scrollToSection = (event, id) => {
    event.preventDefault();
    const element = document.getElementById(id); 
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' }); 
    }
  };

  return (
    <div className={styles.docsContainer}>
      <aside className={styles.docsNav}>
        <ul>
          <li><a href="#intro" onClick={(e) => scrollToSection(e, 'intro')}>Introduction</a></li>
          <li><a href="#installation" onClick={(e) => scrollToSection(e, 'installation')}>Installation</a></li>
          <li><a href="#components" onClick={(e) => scrollToSection(e, 'components')}>Components</a></li>
          <li><a href="#usage" onClick={(e) => scrollToSection(e, 'usage')}>Usage</a></li>
          <li><a href="#properties" onClick={(e) => scrollToSection(e, 'properties')}>Component Properties</a></li>
          <li><a href="#inspiration" onClick={(e) => scrollToSection(e, 'inspiration')}>Inspiration</a></li>
          <li><a href="#thanks" onClick={(e) => scrollToSection(e, 'thanks')}>Special Thanks</a></li>
        </ul>
      </aside>
      <main className={styles.docsContent}>
        <section id="intro">
            <h2 className={styles.firstTitle}>Introduction</h2>
          <p className={styles.punctuation}>Team DBUG DINGOES from Holmesglen Ponder Spinners has crafted a set of animated SVG spinners and loading indicators, so you don’t have to spend time coding and debugging UI components from scratch. Enhance your app's loading experience with visually captivating components!</p>
          <p className={styles.punctuation}>Check out our 
            <a href="https://github.com/DBUG-DINGOES/customised-spinners" target="_blank" rel="noopener noreferrer" className={styles.link}>
                GitHub 
            </a> 
             for more details, or visit our 
            <a href="https://www.npmjs.com/package/@holmesdev/ponder-spinners" target="_blank" rel="noopener noreferrer" className={styles.link}>
                NPM documentation
            </a>
            .
            </p>
        </section>
        
        <section id="installation">
            <h2>Installation</h2>
            <p className={styles.punctuation}>To install and set up the library, run:</p>
            <div className={styles.codeContainer}>
                <CopyBtn textToCopy="npm i @holmesdev/ponder-spinners" theme="dark"/>
                <code>npm i @holmesdev/ponder-spinners</code>
            </div>
            <p className={styles.punctuation}>Or using Yarn:</p>
            <div className={styles.codeContainer}>
                <CopyBtn textToCopy="yarn add @holmesdev/ponder-spinners" theme='dark'/>
                <code>yarn add @holmesdev/ponder-spinners</code>
            </div>
            <p className={styles.punctuation}>!IMPORTANT</p>
            <p className={styles.punctuation}>Styled-components is the JavaScript CSS library used to build our components.</p>
            <p className={styles.punctuation}>To ensure that they work as intended, you will need to separately install styled-components within both the devDependencies & peerDependencies inside of your package.json upon installation of the package.</p>
            <p className={styles.punctuation}>You MUST also ensure that you are:</p>
            <p>Using React.js v18.3.1 or higher</p>
            <p>Using styled-components v6.1.13 or higher</p>
        </section>

        <section id="components">
            <h2>Current Spinner Components</h2>
            <p className={styles.punctuation}>
                This library includes various React components for spinners and animations, helping you enhance your UI effortlessly using styled-components for animations and customizations.
            </p>
            <table className={styles.spinnerTable}>
                <thead>
                <tr>
                    <th>Description</th>
                    <th>Import Statement</th>
                    <th>Name</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td className={styles.punctuation}>Rotating circular spinner with customizable speed, direction, and color.</td>
                    <td className={styles.punctuation}><code>{`import {Spin} from "@holmesdev/ponder-spinners"`}</code></td>
                    <td>Spin</td>
                </tr>
                <tr>
                    <td className={styles.punctuation}>Sequentially jumping dots creating a wave-like loading effect.</td>
                    <td className={styles.punctuation}><code>{`import {Dots} from "@holmesdev/ponder-spinners"`}</code></td>
                    <td>Dots</td>
                </tr>
                <tr>
                    <td className={styles.punctuation}>Morphing boxes that shift between squares and circles in a sequence.</td>
                    <td className={styles.punctuation}><code>{`import {PulseBox} from "@holmesdev/ponder-spinners"`}</code></td>
                    <td>PulseBox</td>
                </tr>
                <tr>
                    <td className={styles.punctuation}>Animated wave with customizable size, colors, speed, and opacity.</td>
                    <td className={styles.punctuation}><code>{`import {Wave} from "@holmesdev/ponder-spinners"`}</code></td>
                    <td>Wave</td>
                </tr>
                <tr>
                    <td className={styles.punctuation}>Animated set of morphing circles with customizable size, colors, and duration.</td>
                    <td className={styles.punctuation}><code>{`import {Circles} from "@holmesdev/ponder-spinners"`}</code></td>
                    <td>Circles</td>
                </tr>
                </tbody>
            </table>
            </section>



            <section id="usage">
                <h2>Usage</h2>
                <p className={styles.punctuation}>Here's how to use the components:</p>

                <div className={styles.codeSnippetContainer}>
                    <h3 className={styles.codeHeading}>Spin</h3>
                    <div className={styles.codeBlock}><code>
                {`import { Spin } from "@holmesdev/ponder-spinners";`}
                <br />
                {`
                <Spin
                    color1="#FF6F61"
                    color2="#ffa9a1"
                    opacity1={0.5}
                    opacity2={1}
                    speed="1s"
                    direction="360deg"
                    size="100"
                />`}
                    </code></div>
                </div>

                <div className={styles.codeSnippetContainer}>
                    <h3 className={styles.codeHeading}>Dots</h3>
                    <div className={styles.codeBlock}>
                        <code>
                        {`import { Dots } from "@holmesdev/ponder-spinners";`}
                        <br />
                    {`
                <Dots 
                    color1="#22333B" 
                    color2="#FF6F61" 
                    color3="#B7AEA3" 
                />;`}
                        </code>
                    </div>
                </div>

                <div className={styles.codeSnippetContainer}>
                    <h3 className={styles.codeHeading}>Pulse Box</h3>
                    <div className={styles.codeBlock}>
                        <code>
                        {`import { PulseBox } from "@holmesdev/ponder-spinners";`}
                        <br />
                        {`
                <PulseBox
                    color1="#22333B"
                    color2="#FF6F61"
                    color3="#ffa9a1"
                    color4="#22333B"
                />;`}
                        </code>
                    </div>
                </div>

                <div className={styles.codeSnippetContainer}>
                    <h3 className={styles.codeHeading}>Wave</h3>
                    <div className={styles.codeBlock}>
                        <code>
                        {`import { Wave } from "@holmesdev/ponder-spinners";`}
                        <br />
                        {`
                <Wave 
                    size={70} 
                    color1="#22333B" 
                    color2="#EAE0D5" 
                    speed="2s" 
                    opacity={1} 
                />`}
                        </code>
                    </div>
                </div>

                <div className={styles.codeSnippetContainer}>
                    <h3 className={styles.codeHeading}>Circles</h3>
                    <div className={styles.codeBlock}>
                        <code>
                        {`import { Circles } from "@holmesdev/ponder-spinners";`}
                        <br />
                {`
                <Circles 
                    size={90} 
                    color1="#FF6F61" 
                    color2="#22333B" 
                    color3="#ffa9a1" 
                    duration={3} 
                />`}
                        </code>
                    </div>
                </div>
                </section>


                <section id="properties">
                    <h2>Component Properties</h2>

                    <h3>Spin</h3>
                    <table className={styles.spinnerTable}>
                        <thead>
                        <tr>
                            <th>Description</th>
                            <th>Type</th>
                            <th>Property</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td className={styles.punctuation}>Color 1 of the circular spinner. Defaults to #FF6F61.</td>
                            <td className={styles.punctuation}><code>string</code></td>
                            <td className={styles.punctuation}><code>color1</code></td>
                        </tr>
                        <tr>
                            <td className={styles.punctuation}>Color 2 of the circular spinner. Defaults to #ffa9a1.</td>
                            <td className={styles.punctuation}><code>string</code></td>
                            <td className={styles.punctuation}><code>color2</code></td>
                        </tr>
                        <tr>
                            <td className={styles.punctuation}>Opacity of the color 1. Defaults to 1.</td>
                            <td className={styles.punctuation}><code>number</code></td>
                            <td className={styles.punctuation}><code>opacity1</code></td>
                        </tr>
                        <tr>
                            <td className={styles.punctuation}>Opacity of the color 2. Defaults to 0.5.</td>
                            <td className={styles.punctuation}><code>number</code></td>
                            <td className={styles.punctuation}><code>opacity2</code></td>
                        </tr>
                        <tr>
                            <td className={styles.punctuation}>Speed of the rotation (e.g., 1s). Defaults to 1s.</td>
                            <td className={styles.punctuation}><code>string</code></td>
                            <td className={styles.punctuation}><code>speed</code></td>
                        </tr>
                        <tr>
                            <td className={styles.punctuation}>Direction of rotation (e.g., 360deg). Defaults to -360deg.</td>
                            <td className={styles.punctuation}><code>string</code></td>
                            <td className={styles.punctuation}><code>direction</code></td>
                        </tr>
                        <tr>
                            <td className={styles.punctuation}>The size of the spinner (e.g., 100). Defaults to 100.</td>
                            <td className={styles.punctuation}><code>string</code></td>
                            <td className={styles.punctuation}><code>size</code></td>
                        </tr>
                        </tbody>
                    </table>

                    <h3>Dots</h3>
                    <table className={styles.spinnerTable}>
                        <thead>
                        <tr>
                            <th>Description</th>
                            <th>Type</th>
                            <th>Property</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td className={styles.punctuation}>Color for the first dot. Defaults to "#22333B".</td>
                            <td className={styles.punctuation}><code>string</code></td>
                            <td className={styles.punctuation}><code>color1</code></td>
                        </tr>
                        <tr>
                            <td className={styles.punctuation}>Color for the second dot. Defaults to "#EAE0D5".</td>
                            <td className={styles.punctuation}><code>string</code></td>
                            <td className={styles.punctuation}><code>color2</code></td>
                        </tr>
                        <tr>
                            <td className={styles.punctuation}>Color for the third dot. Defaults to "#C6AC8F".</td>
                            <td className={styles.punctuation}><code>string</code></td>
                            <td className={styles.punctuation}><code>color3</code></td>
                        </tr>
                        </tbody>
                    </table>

                    <h3>PulseBox</h3>
                    <table className={styles.spinnerTable}>
                        <thead>
                        <tr>
                            <th>Description</th>
                            <th>Type</th>
                            <th>Property</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td className={styles.punctuation}>Color for the first box. Defaults to "#22333B"..</td>
                            <td className={styles.punctuation}><code>string</code></td>
                            <td className={styles.punctuation}><code>color1</code></td>
                        </tr>
                        <tr>
                            <td className={styles.punctuation}>	Color for the second box. Defaults to "#FF6F61".</td>
                            <td className={styles.punctuation}><code>string</code></td>
                            <td className={styles.punctuation}><code>color2</code></td>
                        </tr>
                        <tr>
                            <td className={styles.punctuation}>Color for the third box. Defaults to "#ffa9a1".</td>
                            <td className={styles.punctuation}><code>string</code></td>
                            <td className={styles.punctuation}><code>color3</code></td>
                        </tr>
                        <tr>
                            <td className={styles.punctuation}>	Color for the fourth box. Defaults to "#22333B".</td>
                            <td className={styles.punctuation}><code>string</code></td>
                            <td className={styles.punctuation}><code>color4</code></td>
                        </tr>
                        
                        </tbody>
                    </table>

                    <h3>Wave</h3>
                    <table className={styles.spinnerTable}>
                        <thead>
                        <tr>
                            <th>Description</th>
                            <th>Type</th>
                            <th>Property</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td className={styles.punctuation}>Size of the wave. Default is 30px.</td>
                            <td className={styles.punctuation}><code>string</code></td>
                            <td className={styles.punctuation}><code>size</code></td>
                        </tr>
                        <tr>
                            <td className={styles.punctuation}>Color for the first wave. Defaults to "#22333B".</td>
                            <td className={styles.punctuation}><code>string</code></td>
                            <td className={styles.punctuation}><code>color1</code></td>
                        </tr>
                        <tr>
                            <td className={styles.punctuation}>Color for the second wave. Defaults to "#EAE0D5".</td>
                            <td className={styles.punctuation}><code>string</code></td>
                            <td className={styles.punctuation}><code>color2</code></td>
                        </tr>
                        <tr>
                            <td className={styles.punctuation}>Speed of the wave animation.</td>
                            <td className={styles.punctuation}><code>string</code></td>
                            <td className={styles.punctuation}><code>speed</code></td>
                        </tr>
                        <tr>
                            <td className={styles.punctuation}>Opacity of the wave (0 to 1). Defaults to 1.</td>
                            <td className={styles.punctuation}><code>number</code></td>
                            <td className={styles.punctuation}><code>opacity</code></td>
                        </tr>
                        </tbody>
                    </table>

                    <h3>Circles</h3>
                    <table className={styles.spinnerTable}>
                        <thead>
                        <tr>
                            <th>Description</th>
                            <th>Type</th>
                            <th>Property</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td className={styles.punctuation}>Size of each circle.</td>
                            <td className={styles.punctuation}><code>number</code></td>
                            <td className={styles.punctuation}><code>size</code></td>
                        </tr>
                        <tr>
                            <td className={styles.punctuation}>	Color of the first circle. Defaults to "#FF6F61".</td>
                            <td className={styles.punctuation}><code>string</code></td>
                            <td className={styles.punctuation}><code>color1</code></td>
                        </tr>
                        <tr>
                            <td className={styles.punctuation}>	Color of the second circle. Defaults to "#22333B".</td>
                            <td className={styles.punctuation}><code>string</code></td>
                            <td className={styles.punctuation}><code>color2</code></td>
                        </tr>
                        <tr>
                            <td className={styles.punctuation}>Color of the third circle. Defaults to "#ffa9a1".</td>
                            <td className={styles.punctuation}><code>string</code></td>
                            <td className={styles.punctuation}><code>color3</code></td>
                        </tr>
                        <tr>
                            <td className={styles.punctuation}>Duration of the animation cycle in seconds. Defaults to 3s.</td>
                            <td className={styles.punctuation}><code>string</code></td>
                            <td className={styles.punctuation}><code>duration</code></td>
                        </tr>
                        </tbody>
                    </table>
                    </section>



        <section id="inspiration">
          <h2>Inspiration</h2>
          <p className={styles.punctuation}>We were inspired by the beauty and simplicity of minimalist design. These spinners are intended to enhance user experience without overwhelming the interface.</p>
        </section>

        <section id="thanks">
          <h2>Special Thanks</h2>
          <p className={styles.punctuation}>A big thank you to our mentors Alex, Amberle and Daniel, and everyone who supported us during this project!</p>
        </section>
      </main>
    </div>
  );
};

export default Docs;

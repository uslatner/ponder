import React from 'react';
import styles from './Docs.module.scss';
import CopyBtn from '../components/common/copyBtn';

const Docs = () => {
  const scrollToSection = (event, id) => {
    event.preventDefault(); // Prevent the default anchor behavior
    const element = document.getElementById(id); // Find the section to scroll to
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll to the element
    }
  };

  return (
    <div className={styles.docsContainer}>
      <aside className={styles.docsNav}>
        <ul>
          <li><a href="#intro" onClick={(e) => scrollToSection(e, 'intro')}>Introduction</a></li>
          <li><a href="#installation" onClick={(e) => scrollToSection(e, 'installation')}>Installation</a></li>
          <li><a href="#usage" onClick={(e) => scrollToSection(e, 'usage')}>Usage</a></li>
          <li><a href="#components" onClick={(e) => scrollToSection(e, 'components')}>Components</a></li>
          <li><a href="#properties" onClick={(e) => scrollToSection(e, 'properties')}>Component Properties</a></li>
          <li><a href="#inspiration" onClick={(e) => scrollToSection(e, 'inspiration')}>Inspiration</a></li>
          <li><a href="#thanks" onClick={(e) => scrollToSection(e, 'thanks')}>Special Thanks</a></li>
        </ul>
      </aside>
      <main className={styles.docsContent}>
        <section id="intro">
            <h2 className={styles.firstTitle}>Introduction</h2>
          <p className={styles.punctuation}>Team DBUG DINGOES from Holmesglen Ponder Spinners has crafted a set of animated SVG spinners and loading indicators, so you don’t have to spend time coding and debugging UI components from scratch. Enhance your app's loading experience with visually captivating components!</p>
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
        </section>

        <section id="components">
          <h2>Spinner Components Animation</h2>
          <p className={styles.punctuation}>This library includes various React components for spinners and animations, helping you enhance your UI effortlessly using styled-components for animations and customizations.</p>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Import Statement</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Spin</td>
                <td><code>{`import {Spin} from "@holmesdev/ponder-spinners"`}</code></td>
                <td>Rotating circular spinner with customizable speed, direction, and color.</td>
              </tr>
              <tr>
                <td>Dots</td>
                <td><code>{`import {Dots} from "@holmesdev/ponder-spinners"`}</code></td>
                <td>Sequentially jumping dots creating a wave-like loading effect.</td>
              </tr>
              <tr>
                <td>PulseBox</td>
                <td><code>{`import {PulseBox} from "@holmesdev/ponder-spinners"`}</code></td>
                <td>Morphing boxes that shift between squares and circles in a sequence.</td>
              </tr>
              <tr>
                <td>Wave</td>
                <td><code>{`import {Wave} from "@holmesdev/ponder-spinners"`}</code></td>
                <td>Animated wave with customizable size, colors, speed, and opacity.</td>
              </tr>
              <tr>
                <td>Circles</td>
                <td><code>{`import {Circles} from "@holmesdev/ponder-spinners"`}</code></td>
                <td>Animated set of morphing circles with customizable size, colors, and duration.</td>
              </tr>
            </tbody>
          </table>
        </section>


        <section id="usage">
          <h2>Usage</h2>
          <p>Here's how to use the components:</p>
          <h3>Spin</h3>
          <code>
            {`import { Spin } from "@holmesdev/ponder-spinners";`}
            <br />
            {`<Spin color1="#FF6F61" color2="#ffa9a1" opacity1={0.5} opacity2={1} speed="1s" direction="360deg" size="100" />`}
          </code>

          <h3>Dots</h3>
          <code>
            {`import { Dots } from "@holmesdev/ponder-spinners";`}
            <br />
            {`<Dots colors={["#22333B", "#FF6F61", "#B7AEA3"]} />`}
          </code>

          <h3>Pulse Box</h3>
          <code>
            {`import { PulseBox } from "@holmesdev/ponder-spinners";`}
            <br />
            {`<PulseBox color={["#22333B", "#FF6F61", "#ffa9a1", "#22333B"]} />`}
          </code>

          <h3>Wave</h3>
          <code>
            {`import { Wave } from "@holmesdev/ponder-spinners";`}
            <br />
            {`<Wave size="70px" color={["#22333B", "#EAE0D5"]} speed="2s" opacity={1} />`}
          </code>

          <h3>Circles</h3>
          <code>
            {`import { Circles } from "@holmesdev/ponder-spinners";`}
            <br />
            {`<Circles size={90} color1="#FF6F61" color2="#22333B" color3="#ffa9a1" duration={3} />`}
          </code>
        </section>

        <section id="properties">
          <h2>Component Properties 📋</h2>
          <h3>Spin</h3>
          <table>
            <thead>
              <tr>
                <th>Property</th>
                <th>Type</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>color1</td>
                <td>string</td>
                <td>Color 1 of the circular spinner. Defaults to #FF6F61.</td>
              </tr>
              <tr>
                <td>color2</td>
                <td>string</td>
                <td>Color 2 of the circular spinner. Defaults to #ffa9a1.</td>
              </tr>
              <tr>
                <td>opacity1</td>
                <td>number</td>
                <td>Opacity of the color 1. Defaults to 1.</td>
              </tr>
              <tr>
                <td>opacity2</td>
                <td>number</td>
                <td>Opacity of the color 2. Defaults to 0.5.</td>
              </tr>
              <tr>
                <td>speed</td>
                <td>string</td>
                <td>Speed of the rotation (e.g., 1s). Defaults to 1s.</td>
              </tr>
              <tr>
                <td>direction</td>
                <td>string</td>
                <td>Direction of rotation (e.g., 360deg). Defaults to -360deg.</td>
              </tr>
              <tr>
                <td>size</td>
                <td>string</td>
                <td>The size of the spinner (e.g., 100). Defaults to 100.</td>
              </tr>
            </tbody>
          </table>

          <h3>Dots</h3>
          <table>
            <thead>
              <tr>
                <th>Property</th>
                <th>Type</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>colors</td>
                <td>array of strings</td>
                <td>Colors for each dot. Minimum 2 colors required.</td>
              </tr>
              <tr>
                <td>size</td>
                <td>number</td>
                <td>Size of each dot in pixels. Default is 8.</td>
              </tr>
              <tr>
                <td>duration</td>
                <td>string</td>
                <td>Duration for dot animation (default: 0.5s).</td>
              </tr>
            </tbody>
          </table>

          <h3>PulseBox</h3>
          <table>
            <thead>
              <tr>
                <th>Property</th>
                <th>Type</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>color</td>
                <td>array of strings</td>
                <td>Colors for pulse animation. Minimum 2 colors required.</td>
              </tr>
              <tr>
                <td>duration</td>
                <td>string</td>
                <td>Duration for pulse animation (default: 0.5s).</td>
              </tr>
              <tr>
                <td>size</td>
                <td>number</td>
                <td>Size of pulse box (default: 80).</td>
              </tr>
            </tbody>
          </table>

          <h3>Wave</h3>
          <table>
            <thead>
              <tr>
                <th>Property</th>
                <th>Type</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>size</td>
                <td>string</td>
                <td>Size of the wave. Default is 70px.</td>
              </tr>
              <tr>
                <td>color</td>
                <td>array of strings</td>
                <td>Colors for the wave. Minimum 2 colors required.</td>
              </tr>
              <tr>
                <td>speed</td>
                <td>string</td>
                <td>Speed of the wave animation (default: 1s).</td>
              </tr>
              <tr>
                <td>opacity</td>
                <td>number</td>
                <td>Opacity of the wave (default: 1).</td>
              </tr>
            </tbody>
          </table>

          <h3>Circles</h3>
          <table>
            <thead>
              <tr>
                <th>Property</th>
                <th>Type</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>size</td>
                <td>number</td>
                <td>Size of circles (default: 90).</td>
              </tr>
              <tr>
                <td>color1</td>
                <td>string</td>
                <td>Color 1 of the first circle (default: #FF6F61).</td>
              </tr>
              <tr>
                <td>color2</td>
                <td>string</td>
                <td>Color 2 of the second circle (default: #22333B).</td>
              </tr>
              <tr>
                <td>color3</td>
                <td>string</td>
                <td>Color 3 of the third circle (default: #ffa9a1).</td>
              </tr>
              <tr>
                <td>duration</td>
                <td>string</td>
                <td>Duration for circle animation (default: 3s).</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section id="inspiration">
          <h2>Inspiration</h2>
          <p>We were inspired by the beauty and simplicity of minimalist design. These spinners are intended to enhance user experience without overwhelming the interface.</p>
        </section>

        <section id="thanks">
          <h2>Special Thanks</h2>
          <p>A big thank you to our mentors and everyone who supported us during this project!</p>
        </section>
      </main>
    </div>
  );
};

export default Docs;

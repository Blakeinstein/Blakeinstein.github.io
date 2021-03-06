import { html } from 'lit-html';

const socialsRender = () => {
    return html`<div id="socials">
        <ul>
            <li class="section social-media">
                <span>Social</span>
                <ul class="icons">
                    <li><a class="fab fa-linkedin-in" emotion-tool-tip data-tippy-content="Linkedin" href="https://www.linkedin.com/in/blakeinstein/"></a></li>
                    <li><a class="fab fa-twitter" emotion-tool-tip data-tippy-content="Twitter" href="https://twitter.com/BlaineSensei"></a></li>
                    <li><a class="fab fa-reddit-alien" emotion-tool-tip data-tippy-content="Reddit" href="https://reddit.com/u/sigiz"></a></li>
                    <li><a class="fab fa-instagram" emotion-tool-tip data-tippy-content="Instagram" href="https://www.instagram.com/blainesensei/"></a></li>
                </ul>
            </li>
            <li class="section productivity">
                <span>Productivity</span>
                <ul class="icons">
                    <li><a class="fab fa-github" emotion-tool-tip data-tippy-content="Github" href="https://github.com/Blakeinstein"></a></li>
                    <li><a class="fab fa-stack-overflow" emotion-tool-tip data-tippy-content="StackOverFlow" href="https://stackoverflow.com/users/7799568/blaine"></a></li>
                </ul>
            </li>
            <li class="section gaming">
                <span>Gaming</span>
                <ul class="icons">
                    <li><a class="fab fa-steam" emotion-tool-tip data-tippy-content="Steam" href="https://steamcommunity.com/id/BlaineSensei/"></a></li>
                    <li><a class="fab fa-discord" emotion-tool-tip data-tippy-content="Discord Tag : Blaine#6960"></a></li>
                    <li><a class="fab fa-battle-net" emotion-tool-tip data-tippy-content="Battle.net Tag : Blaine#22648"></a></li>
                </ul>
            </li>
            <li class="section other">
                <span>Other</span>
                <ul class="icons">
                    <li><a class="fab fa-anime" emotion-tool-tip data-tippy-content="MyAnimeList" href="https://myanimelist.net/profile/Blakeinstein">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" id="svg" version="1.1" width="100%" height="100%" viewBox="0, 0, 400,400"><g id="svgg"><path id="path0" d="M238.200 134.643 C 180.431 138.332,157.945 168.294,171.437 223.600 C 174.786 237.328,185.659 265.144,187.287 264.150 C 187.917 263.766,209.766 249.540,209.887 249.435 C 209.934 249.394,209.371 248.513,208.635 247.477 C 203.606 240.404,198.643 225.491,196.663 211.500 L 196.450 210.000 215.625 210.000 L 234.800 210.000 234.800 229.400 L 234.800 248.800 250.666 248.800 L 266.531 248.800 266.266 222.100 C 266.120 207.415,266.001 188.155,266.000 179.300 L 266.000 163.200 250.455 163.200 L 234.910 163.200 234.616 175.500 C 234.455 182.265,234.296 187.808,234.262 187.818 C 234.228 187.828,226.228 187.738,216.485 187.618 C 196.908 187.377,197.801 187.515,198.240 184.800 C 199.840 174.903,206.222 165.881,214.492 161.824 C 221.238 158.514,219.975 158.644,246.900 158.496 C 260.045 158.424,270.800 158.238,270.801 158.082 C 270.805 156.961,263.692 135.168,263.270 135.005 C 262.590 134.745,241.404 134.438,238.200 134.643 M291.200 191.638 L 291.200 248.805 323.691 248.702 L 356.181 248.600 359.007 236.800 L 361.833 225.000 344.817 224.757 C 335.457 224.624,326.045 224.489,323.900 224.457 L 320.000 224.400 320.000 179.838 L 320.000 135.277 315.900 135.050 C 313.645 134.925,307.165 134.743,301.500 134.647 L 291.200 134.471 291.200 191.638 M37.600 191.995 L 37.600 248.800 52.000 248.800 L 66.400 248.800 66.400 213.400 C 66.400 193.930,66.535 178.010,66.700 178.023 C 66.928 178.040,89.310 205.480,92.842 210.072 C 93.464 210.881,93.887 210.427,107.042 194.810 L 120.600 178.714 120.702 213.757 L 120.804 248.800 135.002 248.800 L 149.200 248.800 149.200 192.000 L 149.200 135.200 134.629 135.200 L 120.058 135.200 106.381 152.418 C 98.858 161.889,92.616 169.550,92.510 169.443 C 92.404 169.337,86.697 161.634,79.829 152.325 L 67.342 135.400 52.471 135.295 L 37.600 135.190 37.600 191.995 " stroke="none" fill="#fbfbfb" fill-rule="evenodd"/><path id="path1" d="M0.000 200.000 L 0.000 400.000 200.000 400.000 L 400.000 400.000 400.000 200.000 L 400.000 0.000 200.000 0.000 L 0.000 0.000 0.000 200.000 M263.270 135.005 C 263.692 135.168,270.805 156.961,270.801 158.082 C 270.800 158.238,260.045 158.424,246.900 158.496 C 219.975 158.644,221.238 158.514,214.492 161.824 C 206.222 165.881,199.840 174.903,198.240 184.800 C 197.801 187.515,196.908 187.377,216.485 187.618 C 226.228 187.738,234.228 187.828,234.262 187.818 C 234.296 187.808,234.455 182.265,234.616 175.500 L 234.910 163.200 250.455 163.200 L 266.000 163.200 266.000 179.300 C 266.001 188.155,266.120 207.415,266.266 222.100 L 266.531 248.800 250.666 248.800 L 234.800 248.800 234.800 229.400 L 234.800 210.000 215.625 210.000 L 196.450 210.000 196.663 211.500 C 198.643 225.491,203.606 240.404,208.635 247.477 C 209.371 248.513,209.934 249.394,209.887 249.435 C 209.766 249.540,187.917 263.766,187.287 264.150 C 185.659 265.144,174.786 237.328,171.437 223.600 C 157.945 168.294,180.431 138.332,238.200 134.643 C 241.404 134.438,262.590 134.745,263.270 135.005 M315.900 135.050 L 320.000 135.277 320.000 179.838 L 320.000 224.400 323.900 224.457 C 326.045 224.489,335.457 224.624,344.817 224.757 L 361.833 225.000 359.007 236.800 L 356.181 248.600 323.691 248.702 L 291.200 248.805 291.200 191.638 L 291.200 134.471 301.500 134.647 C 307.165 134.743,313.645 134.925,315.900 135.050 M79.829 152.325 C 86.697 161.634,92.404 169.337,92.510 169.443 C 92.616 169.550,98.858 161.889,106.381 152.418 L 120.058 135.200 134.629 135.200 L 149.200 135.200 149.200 192.000 L 149.200 248.800 135.002 248.800 L 120.804 248.800 120.702 213.757 L 120.600 178.714 107.042 194.810 C 93.887 210.427,93.464 210.881,92.842 210.072 C 89.310 205.480,66.928 178.040,66.700 178.023 C 66.535 178.010,66.400 193.930,66.400 213.400 L 66.400 248.800 52.000 248.800 L 37.600 248.800 37.600 191.995 L 37.600 135.190 52.471 135.295 L 67.342 135.400 79.829 152.325 " stroke="none" fill="#2c54a4" fill-rule="evenodd"/></g></svg>
                    </a></li>
                    <li><a class="fab fa-soundcloud" emotion-tool-tip data-tippy-content="SoundCloud" href="https://soundcloud.com/blakeinstein"></a></li>
                    <li><a class="fab fa-spotify" emotion-tool-tip data-tippy-content="Spotify" href="https://open.spotify.com/user/c3fph9vexjdfvvdmh7h9kjdqv"></a></li>
                </ul>
            </li>
        </ul>
    </div>"`
}

export default socialsRender;
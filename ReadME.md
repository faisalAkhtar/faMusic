# faMusic

![GitHub](https://img.shields.io/github/license/faisalakhtar/faMusic)
![GitHub package.json version](https://img.shields.io/github/package-json/v/faisalakhtar/faMusic)
![GitHub release (latest by date)](https://img.shields.io/github/v/release/faisalakhtar/faMusic)
![GitHub top language](https://img.shields.io/github/languages/top/faisalakhtar/faMusic)
![GitHub issues](https://img.shields.io/github/issues/faisalakhtar/faMusic)
![GitHub Pull Requests](https://img.shields.io/github/issues-pr/faisalakhtar/faMusic)

A web based music player, which is a  browser-native single page application (SPA), that uses the browser's native APIs to manage songs' playing environment. It can be very easily integrated to a backend service for authentication and fetching songs (something to do in the future). As of now, it takes a hardcoded login/pass and plays songs from a json in a file (static).

### Key Features


<table>
    <tr>
        <td>An elegant login page with a different picture on the left everytime page reloads</td>
        <td><img alt='' src='assets/login.png' width='500' /></td>
    </tr>
    <tr>
        <td>A beautiful audio player with very subtle detailing and great UX</td>
        <td><img alt='' src='assets/player.png' width='500' /></td>
    </tr>
    <tr>
        <td>Supports multiple playlists which can be chosen from the button above</td>
        <td><img alt='' src='assets/playlists.png' /></td>
    </tr>
    <tr>
        <td>Native audio player in desktop browser's media tab and mobile browser's notifiaction bar</td>
        <td><img alt='' src='assets/chrome-mediatab.png' /></td>
    </tr>
    <tr>
        <td>Great UX includes showing various states the audio player is in, to the user</td>
        <td>
            <img alt='' src='assets/loading.gif' width='500' />
            <img alt='' src='assets/paused.png' width='500' />
        </td>
    </tr>
    <tr>
        <td>Cross browser and screen-sizes functional<br><br>1.Phone<br>2. iPad<br>3. MacBook</td>
        <td>
            <img alt='' src='assets/phone.png' width='300' />
            <img alt='' src='assets/ipad.png' width='400' />
            <img alt='' src='assets/macbook.png' width='500' />
        </td>
    </tr>
</table>

### Tech Stack

![ReactJS + MaterialUI](assets/techstack.png)

### Acknowledgements

- Original idea for this application was of [Shubhangi](https://goyalshubhangi.github.io/)
- Since no backend is used
    - The login module has hardcoded authentication as of now
    - The songs are served from a static JSON file

### Licensing

![GitHub](https://img.shields.io/github/license/faisalakhtar/faMusic)

All scripts and markups in this repository are under [GNU General Public License - Version 3](LICENSE)

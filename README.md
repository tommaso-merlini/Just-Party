<div align="center">
<h1 align="center">
<img src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/ec559a9f6bfd399b82bb44393651661b08aaf7ba/icons/folder-markdown-open.svg" width="100" />
<br>JUST-PARTY</h1>
<h3>◦ Unleash Fun, Code Together-Just-Party!</h3>
<h3>◦ Developed with the software and tools below.</h3>

<p align="center">
<img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=plastic&logo=JavaScript&logoColor=black" alt="JavaScript" />
<img src="https://img.shields.io/badge/Metro-EF4242.svg?style=plastic&logo=Metro&logoColor=white" alt="Metro" />
<img src="https://img.shields.io/badge/GraphQL-E10098.svg?style=plastic&logo=GraphQL&logoColor=white" alt="GraphQL" />
<img src="https://img.shields.io/badge/PostCSS-DD3A0A.svg?style=plastic&logo=PostCSS&logoColor=white" alt="PostCSS" />
<img src="https://img.shields.io/badge/YAML-CB171E.svg?style=plastic&logo=YAML&logoColor=white" alt="YAML" />
<img src="https://img.shields.io/badge/Webpack-8DD6F9.svg?style=plastic&logo=Webpack&logoColor=black" alt="Webpack" />
<img src="https://img.shields.io/badge/React-61DAFB.svg?style=plastic&logo=React&logoColor=black" alt="React" />
<img src="https://img.shields.io/badge/Progress-5CE500.svg?style=plastic&logo=Progress&logoColor=white" alt="Progress" />
<img src="https://img.shields.io/badge/SemVer-3F4551.svg?style=plastic&logo=SemVer&logoColor=white" alt="SemVer" />
<img src="https://img.shields.io/badge/SVGO-3E7FC1.svg?style=plastic&logo=SVGO&logoColor=white" alt="SVGO" />

<img src="https://img.shields.io/badge/Lodash-3492FF.svg?style=plastic&logo=Lodash&logoColor=white" alt="Lodash" />
<img src="https://img.shields.io/badge/TypeScript-3178C6.svg?style=plastic&logo=TypeScript&logoColor=white" alt="TypeScript" />
<img src="https://img.shields.io/badge/tsnode-3178C6.svg?style=plastic&logo=ts-node&logoColor=white" alt="tsnode" />
<img src="https://img.shields.io/badge/Ajv-23C8D2.svg?style=plastic&logo=Ajv&logoColor=white" alt="Ajv" />
<img src="https://img.shields.io/badge/Buffer-231F20.svg?style=plastic&logo=Buffer&logoColor=white" alt="Buffer" />
<img src="https://img.shields.io/badge/Xcode-147EFB.svg?style=plastic&logo=Xcode&logoColor=white" alt="Xcode" />
<img src="https://img.shields.io/badge/Expo-000020.svg?style=plastic&logo=Expo&logoColor=white" alt="Expo" />
<img src="https://img.shields.io/badge/Express-000000.svg?style=plastic&logo=Express&logoColor=white" alt="Express" />
<img src="https://img.shields.io/badge/JSON-000000.svg?style=plastic&logo=JSON&logoColor=white" alt="JSON" />
</p>
<img src="https://img.shields.io/github/license/tommaso-merlini/Just-Party?style=plastic&color=5D6D7E" alt="GitHub license" />
<img src="https://img.shields.io/github/last-commit/tommaso-merlini/Just-Party?style=plastic&color=5D6D7E" alt="git-last-commit" />
<img src="https://img.shields.io/github/commit-activity/m/tommaso-merlini/Just-Party?style=plastic&color=5D6D7E" alt="GitHub commit activity" />
<img src="https://img.shields.io/github/languages/top/tommaso-merlini/Just-Party?style=plastic&color=5D6D7E" alt="GitHub top language" />
</div>

---

##  Table of Contents
- [ Table of Contents](#-table-of-contents)
- [ Overview](#-overview)
- [ Features](#-features)
- [ repository Structure](#-repository-structure)
- [ Modules](#modules)
- [ Getting Started](#-getting-started)
    - [ Installation](#-installation)
    - [ Running Just-Party](#-running-Just-Party)
    - [ Tests](#-tests)
- [ Roadmap](#-roadmap)
- [ Contributing](#-contributing)
- [ License](#-license)
- [ Acknowledgments](#-acknowledgments)

---


##  Overview

Just-Party" is a convenient and modern party organization solution developed in TypeScript. It facilitates quick and efficient party planning by allowing users to manage critical elements of a gathering in a centralized app. Its major value lies in enhancing the user experience of event management, thus saving time and effort for the party hosts.

---

##  Features

HTTPStatus Exception: 429

---


##  Repository Structure

```sh
└── Just-Party/
    ├── .expo-shared/
    │   └── assets.json
    ├── App.tsx
    ├── Icons/
    │   ├── Emojis/
    ├── app.json
    ├── babel.config.js
    ├── constants.ts
    ├── eas.json
    ├── package-lock.json
    ├── package.json
    ├── src/
    │   ├── Components/
    │   │   ├── Button/
    │   │   ├── Footer/
    │   │   ├── GlassyBox/
    │   │   ├── HorizontalSeparator/
    │   │   ├── Moments/
    │   │   ├── Navbar/
    │   │   ├── PartyCard/
    │   │   └── Post/
    │   ├── Navigation/
    │   │   ├── AppTabs.tsx
    │   │   └── Stacks/
    │   ├── Screens/
    │   │   ├── Explorer.tsx
    │   │   ├── Feed.tsx
    │   │   ├── Notifications.tsx
    │   │   ├── PostCamera.tsx
    │   │   ├── ReactionCamera.tsx
    │   │   ├── SignUp/
    │   │   ├── Tickets.tsx
    │   │   └── User.tsx
    │   └── utils/
    │       └── PrepareCameraRatio.tsx
    ├── tsconfig.json
    └── yarn.lock

```

---


##  Modules

<details closed><summary>Root</summary>

| File                                                                                           | Summary                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| ---                                                                                            | ---                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| [yarn.lock](https://github.com/tommaso-merlini/Just-Party/blob/main/yarn.lock)                 | The code showcases a directory structure for "Just-Party", a TypeScript-based app which includes screen components for user navigation like Explorer, Feed, Notifications, etc., app navigation with tabs and stacks, components for UI elements like buttons, footers, and post, utility functions, and configurations required for the project. The "yarn.lock" file states the project's specific package versions to ensure consistent installs across machines.                                                                                                        |
| [app.json](https://github.com/tommaso-merlini/Just-Party/blob/main/app.json)                   | The code is a configuration file for a mobile application named'JustParty'. It defines application settings like name, icon, splash screen, supported interfaces, bundle identifiers, and package references for iOS, Android, and web. It also sets update behavior, asset bundling patterns, bundler for web, and project id for Expo Application Service (EAS). The directory tree, furthermore, offers insight into app structure, including components, screens, navigation, utilities, and icons.                                                                     |
| [babel.config.js](https://github.com/tommaso-merlini/Just-Party/blob/main/babel.config.js)     | The provided directory represents a TypeScript/React-Native project structure for a social event application named'Just-Party'. The application features various components such as buttons, footers, navigation bars, and posts. The project includes screens for exploration, user notifications, user registration, and user-specific functions. The'babel.config.js' file shows a configuration that enables Babel features, caching and incorporating the'babel-preset-expo' preset for Expo compatibility in this mobile app.                                         |
| [App.tsx](https://github.com/tommaso-merlini/Just-Party/blob/main/App.tsx)                     | The provided code is for a React Native party planning application. It strives to register the app for push notifications, specifically checking if it's running on a physical device. If running on Android, it sets up a notification channel. The core functionality includes navigation tabs and different screens (for exploration, posts, notifications, user info, etc.). Various components enhance visual elements, including various buttons, cards, navigation bars, footers, etc. The code also sets the application's background color and omits a status bar. |
| [tsconfig.json](https://github.com/tommaso-merlini/Just-Party/blob/main/tsconfig.json)         | This is the directory structure for'Just-Party', a React Native app. The'src' folder contains components for buttons, footers, etc., navigation handling, and various screens like'Explorer','Feed','Notifications'. The app utilizes Expo framework, as indicated by '.expo-shared' directory and'expo/tsconfig.base' in'tsconfig.json'. Configuration options for Typescript compiler are listed in'tsconfig.json', including resolution of modules and JSX syntax standard for React Native.                                                                             |
| [package-lock.json](https://github.com/tommaso-merlini/Just-Party/blob/main/package-lock.json) | The code is a directory structure of a React Native application named "Just-Party." It includes Expo configuration files, TypeScript configuration, numerous custom components, navigation setups, and several screens like Explorer, Feed, Notifications, PostCamera, and User. The'package-lock.json' file indicates the application dependencies such as Expo, the Expo status bar, React, & React Native, and devDependencies like Babel.                                                                                                                               |
| [package.json](https://github.com/tommaso-merlini/Just-Party/blob/main/package.json)           | The given code is representative of a React Native application named "Just-Party". Its primary functionalities include user navigation with Expo, rendering of components such as buttons, footers, moments, navbars etc., and several screens for different purposes including sign-up, and camera usage integration. The package.json lists the project's scripts, dependencies and devDependencies, revealing use of Expo packages, gesture handling, navigation, and others essential for a feature-rich app. The application is developed using TypeScript.            |
| [eas.json](https://github.com/tommaso-merlini/Just-Party/blob/main/eas.json)                   | The code represents the directory structure and configuration for an application named "Just-Party". The TypeScript/React application comprises functional components in “Components”, screen layouts in “Screens”, and navigational elements in “Navigation”. Shared assets and configurations are also included. The "eas.json" file outlines build configurations for different environments (development, preview, production) and sets the version requirement for the command-line interface.                                                                         |
| [constants.ts](https://github.com/tommaso-merlini/Just-Party/blob/main/constants.ts)           | This TypeScript directory, named'Just-Party', is organized for a party-related mobile application. It includes directories for components, navigation, screens, utilities, and emojis. Moreover, it contains config files for babel, expo, and package handling. The'constants.ts' file exports an object storing color codes, font size, and standard spacing used across the application. The application features include exploration, feed, notifications, post/reaction camera, user sign-up, and ticket management.                                                   |

</details>

<details closed><summary>.expo-shared</summary>

| File                                                                                            | Summary                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| ---                                                                                             | ---                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| [assets.json](https://github.com/tommaso-merlini/Just-Party/blob/main/.expo-shared/assets.json) | The code showcases directory structure for a project named'Just-Party'. It includes files for setting up configurations (e.g., package.json, babel.config.js, tsconfig.json), assets (within.expo-shared), reusable components such as Button, Footer, Post etc., app navigations (AppTabs.tsx, Stacks), Screens presenting different app views like Explorer, Feed, Notifications, and utility file PrepareCameraRatio.tsx. The assets.json stores a map of assets confirmed for bundling. |

</details>

<details closed><summary>Utils</summary>

| File                                                                                                               | Summary                   |
| ---                                                                                                                | ---                       |
| [PrepareCameraRatio.tsx](https://github.com/tommaso-merlini/Just-Party/blob/main/src/utils/PrepareCameraRatio.tsx) | HTTPStatus Exception: 429 |

</details>

<details closed><summary>Footer</summary>

| File                                                                                                   | Summary                   |
| ---                                                                                                    | ---                       |
| [Footer.tsx](https://github.com/tommaso-merlini/Just-Party/blob/main/src/Components/Footer/Footer.tsx) | HTTPStatus Exception: 429 |

</details>

<details closed><summary>Navbar</summary>

| File                                                                                                               | Summary                   |
| ---                                                                                                                | ---                       |
| [Shadow.tsx](https://github.com/tommaso-merlini/Just-Party/blob/main/src/Components/Navbar/Shadow.tsx)             | HTTPStatus Exception: 429 |
| [CircleButton.tsx](https://github.com/tommaso-merlini/Just-Party/blob/main/src/Components/Navbar/CircleButton.tsx) | HTTPStatus Exception: 429 |
| [Navbar.tsx](https://github.com/tommaso-merlini/Just-Party/blob/main/src/Components/Navbar/Navbar.tsx)             | HTTPStatus Exception: 429 |

</details>

<details closed><summary>Partycard</summary>

| File                                                                                                            | Summary                   |
| ---                                                                                                             | ---                       |
| [PartyCard.tsx](https://github.com/tommaso-merlini/Just-Party/blob/main/src/Components/PartyCard/PartyCard.tsx) | HTTPStatus Exception: 429 |

</details>

<details closed><summary>Horizontalseparator</summary>

| File                                                                                                                                          | Summary                   |
| ---                                                                                                                                           | ---                       |
| [HorizontalSeparetor.tsx](https://github.com/tommaso-merlini/Just-Party/blob/main/src/Components/HorizontalSeparator/HorizontalSeparetor.tsx) | HTTPStatus Exception: 429 |

</details>

<details closed><summary>Button</summary>

| File                                                                                                   | Summary                   |
| ---                                                                                                    | ---                       |
| [Button.tsx](https://github.com/tommaso-merlini/Just-Party/blob/main/src/Components/Button/Button.tsx) | HTTPStatus Exception: 429 |

</details>

<details closed><summary>Post</summary>

| File                                                                                                 | Summary                   |
| ---                                                                                                  | ---                       |
| [Header.tsx](https://github.com/tommaso-merlini/Just-Party/blob/main/src/Components/Post/Header.tsx) | HTTPStatus Exception: 429 |
| [Post.tsx](https://github.com/tommaso-merlini/Just-Party/blob/main/src/Components/Post/Post.tsx)     | HTTPStatus Exception: 429 |

</details>

<details closed><summary>Moments</summary>

| File                                                                                                              | Summary                   |
| ---                                                                                                               | ---                       |
| [Moments.tsx](https://github.com/tommaso-merlini/Just-Party/blob/main/src/Components/Moments/Moments.tsx)         | HTTPStatus Exception: 429 |
| [Moment.tsx](https://github.com/tommaso-merlini/Just-Party/blob/main/src/Components/Moments/Moment.tsx)           | HTTPStatus Exception: 429 |
| [MomentsList.tsx](https://github.com/tommaso-merlini/Just-Party/blob/main/src/Components/Moments/MomentsList.tsx) | HTTPStatus Exception: 429 |

</details>

<details closed><summary>Glassybox</summary>

| File                                                                                                            | Summary                   |
| ---                                                                                                             | ---                       |
| [GlassyBox.tsx](https://github.com/tommaso-merlini/Just-Party/blob/main/src/Components/GlassyBox/GlassyBox.tsx) | HTTPStatus Exception: 429 |

</details>

<details closed><summary>Navigation</summary>

| File                                                                                              | Summary                   |
| ---                                                                                               | ---                       |
| [AppTabs.tsx](https://github.com/tommaso-merlini/Just-Party/blob/main/src/Navigation/AppTabs.tsx) | HTTPStatus Exception: 429 |

</details>

<details closed><summary>Stacks</summary>

| File                                                                                                                           | Summary                   |
| ---                                                                                                                            | ---                       |
| [JoinedPartiesStack.tsx](https://github.com/tommaso-merlini/Just-Party/blob/main/src/Navigation/Stacks/JoinedPartiesStack.tsx) | HTTPStatus Exception: 429 |
| [SearchStack.tsx](https://github.com/tommaso-merlini/Just-Party/blob/main/src/Navigation/Stacks/SearchStack.tsx)               | HTTPStatus Exception: 429 |
| [AuthStack.tsx](https://github.com/tommaso-merlini/Just-Party/blob/main/src/Navigation/Stacks/AuthStack.tsx)                   | HTTPStatus Exception: 429 |
| [HomeStack.tsx](https://github.com/tommaso-merlini/Just-Party/blob/main/src/Navigation/Stacks/HomeStack.tsx)                   | HTTPStatus Exception: 429 |

</details>

<details closed><summary>Screens</summary>

| File                                                                                                         | Summary                   |
| ---                                                                                                          | ---                       |
| [ReactionCamera.tsx](https://github.com/tommaso-merlini/Just-Party/blob/main/src/Screens/ReactionCamera.tsx) | HTTPStatus Exception: 429 |
| [PostCamera.tsx](https://github.com/tommaso-merlini/Just-Party/blob/main/src/Screens/PostCamera.tsx)         | HTTPStatus Exception: 429 |
| [Notifications.tsx](https://github.com/tommaso-merlini/Just-Party/blob/main/src/Screens/Notifications.tsx)   | HTTPStatus Exception: 429 |
| [Tickets.tsx](https://github.com/tommaso-merlini/Just-Party/blob/main/src/Screens/Tickets.tsx)               | HTTPStatus Exception: 429 |
| [User.tsx](https://github.com/tommaso-merlini/Just-Party/blob/main/src/Screens/User.tsx)                     | HTTPStatus Exception: 429 |
| [Explorer.tsx](https://github.com/tommaso-merlini/Just-Party/blob/main/src/Screens/Explorer.tsx)             | HTTPStatus Exception: 429 |
| [Feed.tsx](https://github.com/tommaso-merlini/Just-Party/blob/main/src/Screens/Feed.tsx)                     | HTTPStatus Exception: 429 |

</details>

<details closed><summary>Signup</summary>

| File                                                                                                | Summary                   |
| ---                                                                                                 | ---                       |
| [Step2.tsx](https://github.com/tommaso-merlini/Just-Party/blob/main/src/Screens/SignUp/Step2.tsx)   | HTTPStatus Exception: 429 |
| [Step3.tsx](https://github.com/tommaso-merlini/Just-Party/blob/main/src/Screens/SignUp/Step3.tsx)   | HTTPStatus Exception: 429 |
| [SignUp.tsx](https://github.com/tommaso-merlini/Just-Party/blob/main/src/Screens/SignUp/SignUp.tsx) | HTTPStatus Exception: 429 |
| [Step1.tsx](https://github.com/tommaso-merlini/Just-Party/blob/main/src/Screens/SignUp/Step1.tsx)   | HTTPStatus Exception: 429 |

</details>

---

##  Getting Started

***Dependencies***

Please ensure you have the following dependencies installed on your system:

`- ℹ️ Dependency 1`

`- ℹ️ Dependency 2`

`- ℹ️ ...`

###  Installation

1. Clone the Just-Party repository:
```sh
git clone https://github.com/tommaso-merlini/Just-Party.git
```

2. Change to the project directory:
```sh
cd Just-Party
```

3. Install the dependencies:
```sh
npm install
```

###  Running Just-Party

```sh
npm run build && node dist/main.js
```

###  Tests
```sh
npm test
```

---


##  Project Roadmap

> - [X] `ℹ️  Task 1: Implement X`
> - [ ] `ℹ️  Task 2: Implement Y`
> - [ ] `ℹ️ ...`


---

##  Contributing

Contributions are welcome! Here are several ways you can contribute:

- **[Submit Pull Requests](https://github.com/tommaso-merlini/Just-Party/blob/main/CONTRIBUTING.md)**: Review open PRs, and submit your own PRs.
- **[Join the Discussions](https://github.com/tommaso-merlini/Just-Party/discussions)**: Share your insights, provide feedback, or ask questions.
- **[Report Issues](https://github.com/tommaso-merlini/Just-Party/issues)**: Submit bugs found or log feature requests for TOMMASO-MERLINI.

#### *Contributing Guidelines*

<details closed>
<summary>Click to expand</summary>

1. **Fork the Repository**: Start by forking the project repository to your GitHub account.
2. **Clone Locally**: Clone the forked repository to your local machine using a Git client.
   ```sh
   git clone <your-forked-repo-url>
   ```
3. **Create a New Branch**: Always work on a new branch, giving it a descriptive name.
   ```sh
   git checkout -b new-feature-x
   ```
4. **Make Your Changes**: Develop and test your changes locally.
5. **Commit Your Changes**: Commit with a clear and concise message describing your updates.
   ```sh
   git commit -m 'Implemented new feature x.'
   ```
6. **Push to GitHub**: Push the changes to your forked repository.
   ```sh
   git push origin new-feature-x
   ```
7. **Submit a Pull Request**: Create a PR against the original project repository. Clearly describe the changes and their motivations.

Once your PR is reviewed and approved, it will be merged into the main branch.

</details>

---

##  License


This project is protected under the [SELECT-A-LICENSE](https://choosealicense.com/licenses) License. For more details, refer to the [LICENSE](https://choosealicense.com/licenses/) file.

---

##  Acknowledgments

- List any resources, contributors, inspiration, etc. here.

[**Return**](#Top)

---

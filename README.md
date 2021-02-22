# EssentialsX Website

The EssentialsX website hosted at https://essentialsx.net.

This website is a static site generated using [Saber](https://saber.land/). The site uses the [Bulma](https://bulma.io) and [Buefy](https://buefy.org) frameworks.

## Building

### Set up your environment

1. Ensure you have Git, Node.js and Yarn installed and on your path
2. Clone the repository
3. Run `git submodule update --init --recursive`
4. Run `yarn install`

### Commands

- To start a development server with live reload: `yarn saber`
- To build a site for deployment: `yarn saber build`
- To update wiki content: `git submodule update --recursive --remote`

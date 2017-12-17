import helix from 'helix-js'
import log from 'twine-js/lib/log'
import renderer from 'helix-js/lib/renderers/yo-yo'
import model, { GlobalState, GlobalActions } from './models'
import pages from './pages'

const mount = document.createElement('div')
document.body.appendChild(mount)

helix<GlobalState, GlobalActions>({
  model: model(),
  routes: pages(),
  render: renderer(mount),
  plugins: [log],
})

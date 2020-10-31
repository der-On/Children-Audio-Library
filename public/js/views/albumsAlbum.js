import albumCoverView from './albumCover.js';

export default function albumsAlbumView(vnode, album) {
  const playing = vnode.state.store.get('playing', false);
  const selectedAlbumId = vnode.state.store.get('selectedAlbum');
  const isSelected = album.id === selectedAlbumId;
  const playingAlbumId = vnode.state.store.get('playingAlbum');
  const isPlaying = album.id && album.id === playingAlbumId;
  const className = [];
  let onclick;

  if (album.onclick) {
    onclick = album.onclick;
  }
  else if (isSelected) {
    onclick = _.partial(vnode.state.showFullScreenAlbumCover, album.id);
  } else {
    onclick = _.partial(vnode.state.selectAlbum, album.id);
  }

  if (isSelected) {
    className.push('is-selected');
  }
  if (isPlaying && playing) {
    className.push('is-playing');
  }

  return m('.albums__album', {
    className: className.join(' '),
    key: album.id
  }, [
    albumCoverView(vnode, album, {
      onclick
    }),
    m('i.icon.albums__album-icon', {
      className: isPlaying ? '' : 'is-hidden'
    }, playing ? 'play_circle_filled' : 'pause_circle_filled')
  ]);
}
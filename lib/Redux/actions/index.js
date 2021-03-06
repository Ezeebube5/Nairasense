
// Action to get all Repos
export function getRepos(response) {
  return {
    type: 'Get_Repos',
    payload: response,
  };
}
// Thunk function, it calls the getRepos action above after it receives the fetch response.
export function getRepoThunk() {
  return function (dispatch, getState) {
    fetch('http://www.investnaira.com/wp-json/wp/v2/posts')

    .then(e => e.json())
      .then((response) => {
        console.log(response);
        let arr = response.slice(0, 20);

        // remove slice
        dispatch(getRepos(arr));
      }).catch((error) => {
        console.error(error, 'ERRRRRORRR');
      });
  };
}


export function getMediaThunk() {
  return function (dispatch, getState) {
    fetch('https://api.github.com/repositories')
    .then(e => e.json())
      .then((response) => {
        console.log(response);
        const arr = response.slice(0, 10);
        // remove slice
        dispatch(getRepos(arr));
      }).catch((error) => {
        console.error(error, 'ERRRRRORRR');
      });
  };
}
// Repo selected action
export function repoSelected(repo) {
  return {
    type: 'Repo_Selected',
    payload: repo,
  };
}

// open drawer
export function toggleDrawer() {
  return { type: 'Toggle_Drawer' };
}

export function openPage(page) {
  return { type: 'Open_Page',
    payload: page };
}

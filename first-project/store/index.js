import Vuex from 'vuex'

const createStore = () => {
    return new Vuex.Store({
        state: {
            loadedPosts: []
        },
        mutations: {
            setPosts(state, posts) {
                state.loadedPosts = posts
            }
        },
        actions: {
            nuxtServerInit(vuexContext, context) {
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        vuexContext.commit('setPosts', [
                            { 
                                id: '1',
                                title: 'First Post', 
                                previewText: 'This our first post!',
                                thumbnail: 'https://cdn-images-1.medium.com/max/1600/1*dKYx6tc_nT6hELIz9_pExg.png'
                            },
                            { 
                                id: '2',
                                title: 'Second Post', 
                                previewText: 'This our Second post!',
                                thumbnail: 'https://cdn-images-1.medium.com/max/1600/1*dKYx6tc_nT6hELIz9_pExg.png'
                            }
                        ])
                        resolve()
                    }, 1000);
                  })
            },
            setPosts(vuexContext, posts) {
                vuexContext.commit("setPosts", posts);
            }
        },
        getters: {
            loadedPosts(state) {
                return state.loadedPosts;
            }
        }
    })
}

export default createStore;
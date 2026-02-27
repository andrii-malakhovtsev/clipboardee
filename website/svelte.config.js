import adapter from '@sveltejs/adapter-static';

export default {
  kit: {
    adapter: adapter({
      fallback: '404.html' // Helps with routing on GH Pages
    }),
    paths: {
      // This is important! Use your repo name here.
      base: process.env.NODE_ENV === 'production' ? '/your-repo-name' : '',
    }
  }
};
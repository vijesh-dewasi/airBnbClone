/** @type {import('tailwindcss').Config} */
export default {
  content: [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors:{
        primary:'#ff385c'
      },
      backgroundColor: theme => ({
        'smoke':"#FFFAFA"
       }),
       inset: {
        'foot': '-500%',
      },
      spacing: {
        '1/2screen':'70vh',
        'c26':'24rem',
        'c10':"10rem"
       },
       maxWidth: {
        '70p':"70%",
        '90p':  '90%',
        '80p':"80%",
        'icon': '2.5rem'
       },
       minHeight: {
        '10c':"2.5rem",
        '20c':"5rem",
       },
       minWidth: {
        'c10':"10rem"
       }
    },
     screens: {
      'mx500': {'max':'500px'},
      'mx600': {'max':'600px'},
      'mx800': {'max':'800px'},
      'mx900': {'max':'900px'},
      'mx1200':{'max':'1200px'},
      'r1': {'min':'0px','max':'799px'},
      'mob3':'300px',
      'mob2': '500px',
      'mob4':'600px',
      'mob1': '800px',
      'tab1': '900px',
      'lap1': '1380px',
    }
  },
  plugins: [],
}


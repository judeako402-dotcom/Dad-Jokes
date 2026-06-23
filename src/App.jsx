import { useState, useEffect, useCallback } from 'react'
import './App.css'

const jokes = [
  { q: "Why don't scientists trust atoms?", a: "They make up everything!" },
  { q: "What do you call a fish with no eyes?", a: "A fsh." },
  { q: "Why did the scarecrow win an award?", a: "He was outstanding in his field!" },
  { q: "How does a penguin build its house?", a: "Igloos it together!" },
  { q: "What do you call a bear with no teeth?", a: "A gummy bear!" },
  { q: "Why don't skeletons fight each other?", a: "They don't have the guts!" },
  { q: "What did the ocean say to the beach?", a: "Nothing, it just waved." },
  { q: "Why did the bicycle fall over?", a: "Because it was two-tired!" },
  { q: "What do you call cheese that isn't yours?", a: "Nacho cheese!" },
  { q: "Why did the math book look so sad?", a: "Because it had too many problems." },
  { q: "What do you call a factory that sells generally okay products?", a: "A satis-factory." },
  { q: "How do you make holy water?", a: "You boil the hell out of it." },
  { q: "What's the best thing about Switzerland?", a: "I don't know, but the flag is a big plus." },
  { q: "Why don't programmers like nature?", a: "It has too many bugs." },
  { q: "What do you call a pile of cats?", a: "A meow-ntain." },
  { q: "Why did the coffee file a police report?", a: "It got mugged." },
  { q: "What's brown and sticky?", a: "A stick." },
  { q: "How does a train eat?", a: "It goes chew-chew." },
  { q: "What do you call a sad strawberry?", a: "A blueberry." },
  { q: "Why did the golfer bring two pairs of pants?", a: "In case he got a hole in one." },
  { q: "What do you call a fake noodle?", a: "An impasta." },
  { q: "Why did the picture go to jail?", a: "Because it was framed." },
  { q: "What do you call a boomerang that won't come back?", a: "A stick." },
  { q: "What do you call a can opener that doesn't work?", a: "A can't opener." },
  { q: "Why did the chicken cross the road?", a: "To get to the other side." },
  { q: "Why did the chicken cross the road, roll in mud, and cross back?", a: "Because it was a dirty double-crosser." },
  { q: "What's orange and sounds like a parrot?", a: "A carrot." },
  { q: "What do you call a cow with no legs?", a: "Ground beef." },
  { q: "What do you call a cow with two legs?", a: "Lean beef." },
  { q: "What do you call a cow with three legs?", a: "Tri-tip." },
  { q: "What do you call a cow with four legs?", a: "A cow." },
  { q: "What do you call a fish wearing a bowtie?", a: "Sofishticated." },
  { q: "Why did the banana go to the doctor?", a: "Because it wasn't peeling well." },
  { q: "What's the difference between a good joke and a bad joke timing?", a: "Timing." },
  { q: "What do you call a lazy kangaroo?", a: "A pouch potato." },
  { q: "Why did the stadium get so hot?", a: "All the fans left." },
  { q: "What kind of music do mummies listen to?", a: "Wrap music." },
  { q: "What do you call a belt made of watches?", a: "A waist of time." },
  { q: "Why do bees have sticky hair?", a: "Because they use honeycombs." },
  { q: "What do you call a sheep with no legs?", a: "A cloud." },
  { q: "How does a scientist freshen their breath?", a: "With experi-mints." },
  { q: "What do you call a dinosaur with an extensive vocabulary?", a: "A thesaurus." },
  { q: "What do you call a sleeping bull?", a: "A bulldozer." },
  { q: "What do you call a pig that does karate?", a: "A pork chop." },
  { q: "What did the left eye say to the right eye?", a: "Between you and me, something smells." },
  { q: "What do you call a snowman with a six-pack?", a: "An abdominal snowman." },
  { q: "What do you call an alligator in a vest?", a: "An investigator." },
  { q: "How do you catch a squirrel?", a: "Climb a tree and act like a nut." },
  { q: "How do you make a tissue dance?", a: "Put a little boogie in it." },
  { q: "What did the 0 say to the 8?", a: "Nice belt." },
  { q: "What's the difference between a piano and a fish?", a: "You can tune a piano, but you can't tuna fish." },
  { q: "Why did the teddy bear say no to dessert?", a: "Because it was stuffed." },
  { q: "Why did the barber win the race?", a: "He knew all the shortcuts." },
  { q: "What do you call a fly without wings?", a: "A walk." },
  { q: "What did the janitor say when he jumped out of the closet?", a: "Supplies!" },
  { q: "Why do ducks have tail feathers?", a: "To cover their buttquacks." },
  { q: "What do you call a dog that can do magic?", a: "A Labracadabrador." },
  { q: "Why can't you give Elsa a balloon?", a: "Because she'll let it go." },
  { q: "What's a ghost's favorite dessert?", a: "Boo-berry pie." },
  { q: "What do you call a fake stone in Ireland?", a: "A sham rock." },
  { q: "How do you keep a bagel from getting away?", a: "Put lox on it." },
  { q: "What do you call a man with a rubber toe?", a: "Roberto." },
  { q: "Why did the scarecrow get promoted?", a: "He was outstanding in his field." },
  { q: "What did the grape say when it got stepped on?", a: "Nothing, but it let out a little wine." },
  { q: "What's Forrest Gump's password?", a: "1forrest1" },
  { q: "What do you get when you cross a snowman and a vampire?", a: "Frostbite." },
  { q: "Why did the cowboy buy a Dachshund?", a: "He wanted to get a long little doggy." },
  { q: "What is a tornado's favorite game?", a: "Twister." },
  { q: "How do you make a Kleenex dance?", a: "Put a little boogie in it." },
  { q: "Why don't seagulls fly over the bay?", a: "Because then they'd be bagels." },
  { q: "What's the best time to go to the dentist?", a: "Tooth-hurty." },
  { q: "How does a penguin build a house?", a: "Igloos it together." },
  { q: "Why don't you ever see hippos hiding in trees?", a: "Because they're really good at it." },
  { q: "What's the difference between a guitar and a fish?", a: "You can tune a guitar but you can't tuna fish." },
  { q: "Why can't you hear a pterodactyl in the bathroom?", a: "Because it has a silent pee." },
  { q: "What has more letters than the alphabet?", a: "The post office." },
  { q: "Why do cats make terrible storytellers?", a: "They only have one tail." },
  { q: "What's invisible and smells like carrots?", a: "Rabbit farts." },
  { q: "What do you call an Amish person with his hand in a horse's mouth?", a: "A mechanic." },
  { q: "What did the fish say when he hit the wall?", a: "Dam." },
  { q: "How do you find Will Smith in the snow?", a: "Look for fresh prints." },
  { q: "What's the difference between a duck and a goose?", a: "Their legs are both the same length." },
  { q: "What do you get when you cross a bee and a sheep?", a: "A bah-humbug." },
  { q: "What do you call a dog that can do math?", a: "A calculator." },
  { q: "How does a boat show affection?", a: "It hugs you buoy." },
  { q: "What do you call a crocodile that solves mysteries?", a: "An investi-gator." },
  { q: "Why did the cookie go to the doctor?", a: "Because it was feeling crumb-y." },
  { q: "What did the dirt say to the rain?", a: "If you keep this up, my name will be mud." },
  { q: "Why did the mushroom go to the party?", a: "Because he was a fun-gi." },
  { q: "What do you call a bee that can't make up its mind?", a: "A maybe." },
  { q: "What's the difference between a well-dressed man and a tired dog?", a: "One wears a suit, the other just wants to lie down." },
  { q: "What do you call a bear with no ears?", a: "B." },
  { q: "Why couldn't the bicycle stand up by itself?", a: "It was two-tired." },
  { q: "What's a skeleton's favorite instrument?", a: "A trom-bone." },
  { q: "What kind of shorts do clouds wear?", a: "Thunderpants." },
  { q: "What happens when you eat too many Christmas decorations?", a: "You get tinsel-itis." },
  { q: "What did the sushi say to the bee?", a: "Wasabee!" },
  { q: "What did one wall say to the other wall?", a: "I'll meet you at the corner." },
  { q: "What do you call a train made of bubblegum?", a: "A chew-chew train." },
  { q: "What do you call someone with no body and no nose?", a: "Nobody knows." },
  { q: "Why can't you give a snowman a hug?", a: "It's too cold." },
  { q: "What did the little fish say when he swam into a wall?", a: "Dam!" },
  { q: "What's brown and rhymes with 'snack'?", a: "A smack." },
  { q: "What's the best time to go to the dentist?", a: "Tooth-hurty." },
  { q: "What kind of dog tells the best jokes?", a: "A punny one." },
  { q: "What's a witch's favorite subject?", a: "Spelling." },
]

function useDadJokes() {
  const [index, setIndex] = useState(() => Math.floor(Math.random() * jokes.length))
  const [favorites, setFavorites] = useState(() => {
    try { return JSON.parse(localStorage.getItem('dad-joke-favs') || '[]') }
    catch { return [] }
  })
  const [showAnswer, setShowAnswer] = useState(false)
  const [animState, setAnimState] = useState('enter')

  const next = useCallback(() => {
    setAnimState('exit')
    setTimeout(() => {
      let nextIdx
      do { nextIdx = Math.floor(Math.random() * jokes.length) } while (nextIdx === index && jokes.length > 1)
      setIndex(nextIdx)
      setShowAnswer(false)
      setAnimState('enter')
    }, 250)
  }, [index])

  const reveal = useCallback(() => setShowAnswer(true), [])

  const toggleFavorite = useCallback(() => {
    const joke = jokes[index]
    setFavorites(prev => {
      const exists = prev.some(f => f.q === joke.q)
      const next = exists ? prev.filter(f => f.q !== joke.q) : [...prev, joke]
      localStorage.setItem('dad-joke-favs', JSON.stringify(next))
      return next
    })
  }, [index])

  const isFav = favorites.some(f => f.q === jokes[index].q)

  return { joke: jokes[index], showAnswer, animState, next, reveal, toggleFavorite, isFav, favorites }
}

function JokeCard({ joke, showAnswer, animState, onReveal, onNext, onFavorite, isFav }) {
  const [copyMsg, setCopyMsg] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(`${joke.q}\n${joke.a}`)
    setCopyMsg(true)
    setTimeout(() => setCopyMsg(false), 1500)
  }

  return (
    <div className={`card ${animState}`}>
      <div className="card-content">
        <div className={`card-body ${showAnswer ? 'answered' : ''}`}>
          <p className="joke-question">{joke.q}</p>
          <div className="answer-area">
            {showAnswer ? (
              <p className="joke-answer">{joke.a}</p>
            ) : (
              <button className="reveal-btn" onClick={onReveal}>
                Reveal answer
              </button>
            )}
          </div>
        </div>
        <div className="card-actions">
          <button
            className={`action-btn ${isFav ? 'is-fav' : ''}`}
            onClick={onFavorite}
            title={isFav ? 'Remove from favorites' : 'Add to favorites'}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill={isFav ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
            <span>{isFav ? 'Saved' : 'Save'}</span>
          </button>
          <button className="action-btn" onClick={handleCopy} title="Copy joke">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
            <span>{copyMsg ? 'Copied!' : 'Copy'}</span>
          </button>
          <button className="action-btn" onClick={onNext} title="Next joke">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
            <span>Next</span>
          </button>
        </div>
      </div>
    </div>
  )
}

function FavoritesDrawer({ favorites, open, onClose, onSelect }) {
  return (
    <>
      {open && <div className="overlay" onClick={onClose} />}
      <div className={`drawer ${open ? 'open' : ''}`}>
        <div className="drawer-header">
          <h2>Favorites</h2>
          <span className="drawer-count">{favorites.length}</span>
          <button className="drawer-close" onClick={onClose}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
        </div>
        <div className="drawer-list">
          {favorites.length === 0 ? (
            <p className="empty-favs">No saved jokes yet</p>
          ) : (
            favorites.map((j, i) => (
              <button key={i} className="fav-item" onClick={() => onSelect(j)}>
                <span className="fav-q">{j.q}</span>
                <span className="fav-a">{j.a}</span>
              </button>
            ))
          )}
        </div>
      </div>
    </>
  )
}

export default function App() {
  const { joke, showAnswer, animState, next, reveal, toggleFavorite, isFav, favorites } = useDadJokes()
  const [favOpen, setFavOpen] = useState(false)
  const [jokeCount, setJokeCount] = useState(0)

  useEffect(() => {
    const handler = (e) => {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return
      if (e.key === ' ' || e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        e.preventDefault()
        next()
        setJokeCount(c => c + 1)
      }
      if (e.key === 'Enter' && !showAnswer) {
        e.preventDefault()
        reveal()
      }
      if (e.key === 'f' || e.key === 'F') toggleFavorite()
      if (e.key === 'd' || e.key === 'D') setFavOpen(o => !o)
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [next, reveal, toggleFavorite, showAnswer])

  const handleNext = () => {
    next()
    setJokeCount(c => c + 1)
  }

  const handleSelectFav = (j) => {
    const i = jokes.findIndex(x => x.q === j.q)
    if (i >= 0) {
      setFavOpen(false)
    }
  }

  return (
    <>
      <header className="header">
        <div className="header-inner">
          <h1 className="title">Dad jokes</h1>
        </div>
      </header>

      <main className="main">
        <div className="container">
          <div className="joke-count">{jokeCount} jokes told</div>
          <JokeCard
            joke={joke}
            showAnswer={showAnswer}
            animState={animState}
            onReveal={reveal}
            onNext={handleNext}
            onFavorite={toggleFavorite}
            isFav={isFav}
          />
          <div className="bottom-bar">
            <button className="text-btn" onClick={() => setFavOpen(true)}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              Saved jokes
            </button>
            <div className="shortcuts-hint">
              <kbd>Space</kbd> next &middot; <kbd>Enter</kbd> reveal
            </div>
          </div>
        </div>
      </main>

      <FavoritesDrawer
        favorites={favorites}
        open={favOpen}
        onClose={() => setFavOpen(false)}
        onSelect={handleSelectFav}
      />
    </>
  )
}

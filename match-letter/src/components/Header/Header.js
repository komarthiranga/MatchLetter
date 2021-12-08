import classes from './Header.module.css';
const Header = () => <header>
    <div className={classes['container']}>
         <h1>Match Letter Game</h1>
         <div className={classes['players__container']}>
            <div className={classes['container__player1']}>
                <button>Player 1 </button>
            </div>
            <div className={classes['container__player2']}>
                <button>Player 2 </button>
            </div>
          </div>  
    </div>
</header>


export default Header;
import PoweredBy from '../assets/Button_PoweredbyStellaswap.png'
const Stella = () => {
	return (
		<div className="stella_section">
			<div className="stella_text">
				<p>Coming from another network? Transfer your assets from other blockchain into Moonbeam, then swap some for GLMR</p>
			</div>
			<div className="stella_buttons_row">
				<a className="bridge_button" target="_blank" rel="noreferrer" href="https://app.stellaswap.com/bridge">
				<button>Bridge</button>
				</a>
				<a className="bridge_button" target="_blank" rel="noreferrer" href="https://app.stellaswap.com/bridge/gas-swap">
				<button>Swap for Gas</button>
				</a>

			</div>
			<div className="stella_text">
			<img src={PoweredBy}/>
			</div>
		</div>
	)
}
// https://app.stellaswap.com/bridge/gas-swap
export default Stella

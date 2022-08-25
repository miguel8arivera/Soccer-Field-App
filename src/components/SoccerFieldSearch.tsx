type SoccerFieldSearchProps = {
	onSearch: (query: string) => void;
};
export default function SoccerFieldSearch({
	onSearch,
}: SoccerFieldSearchProps) {
	return (
		<div>
			<h5 className='text-white'>Busca tu Campo:</h5>
			<form>
				<input
					className='form-control'
					type='search'
					placeholder='Busca aqui ...'
					onChange={e => onSearch(e.target.value)}
				/>
			</form>
		</div>
	);
}

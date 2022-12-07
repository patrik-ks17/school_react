export function Diak() {
	const [students, setStudents] = useState([]);
	const [isFetchPending, setFetchPending] = useState(false);
	useEffect(() => {
		setFetchPending(true);
		fetch("http://localhost:9000/students")
			.then((res) => res.json())
			.then((diakok) => setStudents(diakok))
			.catch(console.log)
			.finally(() => {
				setFetchPending(false);
			});
	}, []);
	return (
		<div className="col-md-4">
			<div className="card">
				<h2>Kasza Tünde</h2>
			</div>
		</div>
		
	)
}
export function Diak({student}) {
	return (
		<div className="col-md-4">
			<div className="card">
				<h2>{student.lastName + ' ' + student.firstName}</h2>
			</div>
		</div>
	)
}
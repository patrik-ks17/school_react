import {Diak, edited} from './Diak';
import {NewDiak} from './NewDiak';
import { useState, useEffect } from 'react';
import { EditDiak } from './EditDiak';


export function StudentList() {
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
	}, [students, edited]);
	return (
		<div className="row">
			<h1>2/14 Szoftverfejlesztők</h1>
			{students.map((student) => (
				<Diak student={student} key={student._id.toString()} />
			))}
			<NewDiak/>
			<EditDiak student={edited}/>
		</div>
	)
}
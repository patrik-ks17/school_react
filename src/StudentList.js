import {Diak} from './Diak';
import { useState, useEffect } from 'react';

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
	}, []);
	return (
		<div className="row">
			<h1>2/14 Szoftverfejlesztők</h1>
			{students.map((student) => (
				<Diak student={student}/>
			))}
		</div>
	)
}
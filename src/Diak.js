import { CCard, CCardHeader, CListGroup, CListGroupItem, CCardFooter } from "@coreui/react";


let editing = "";
function setEditing(value) {
	editing = value;
}
export {editing, setEditing};



export function Diak({ student }) {
	
	async function addGrade(grade) {
		const body = JSON.stringify({
			id: student._id.toString(),
			grades: [grade]
		});
		const response = await fetch("http://localhost:9000/grades", { 
					method: "POST",
					body: body,
					headers: {
						'content-type':'application/json'
					}
				})
		if (!response.ok) {
			alert('Sikertelen jegy hozzáadás!')
			return
		}
	}

	async function torol() {
		const response = await fetch("http://localhost:9000/students/" + student._id.toString(), { 
					method: "DELETE"
				})
		if (!response.ok) {
			alert('Sikertelen diák törlés!')
			return
		}
	}

	function editingStudent(student) {
		editing = student;
	}
	
	return (
		<div className="col-md-4">
			<CCard>
			<CCardHeader>{student.lastName + " " + student.firstName}</CCardHeader>
			<CListGroup flush>
				<CListGroupItem>Születési év: {student.birthYear}</CListGroupItem>
				<CListGroupItem>Jegyek: {
					student.grades.map(grade => (
						grade + " "
					))
					}</CListGroupItem>	
			</CListGroup>
			<CCardFooter>
					{
						[1,2,3,4,5].map(grade => (
							<button type='button' onClick={() => addGrade(grade)} key={grade}>{grade}</button>
						))
					}
					<img src="./edit.png" alt="" onClick={() => editingStudent(student)}/>
					<img src="./delete.png" alt="" onClick={() => torol()}/>
			</CCardFooter>
			</CCard>
		</div>
	);
}

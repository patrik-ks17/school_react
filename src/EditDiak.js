import { CCard, CCardHeader, CListGroup, CListGroupItem, CCardFooter } from "@coreui/react";
import {edited, setEdited} from './Diak'

export function EditDiak({ student }) {
	async function modosit(student) {
		const nev = document.querySelector('#edit_nev').value;
		let lastName = nev.split(' ')[0]
		let firstName;
		if (nev.split(' ').length > 2)
			firstName = nev.split(' ')[1] + " " + nev.split(' ')[2];
		else
			firstName = nev.split(' ')[1]
		const sz_ev = document.querySelector('#edit_sz_ev');

		const body = JSON.stringify({ 
			firstName: firstName, 
			lastName: lastName,
			birthYear: sz_ev.value
		})
		const response = await fetch("http://localhost:9000/students/" + student._id.toString(), {
			method: "PUT",
			body: body,
			headers: {
				'content-type': 'application/json'
			}
		})
		if (!response.ok) {
			alert('Sikertelen tanuló módosítás!')
			console.log(student);
			return
		}
		else
			setEdited("")
	}
	
	if (edited != "") {
		return ( 
			<div className="col-md-4">
				<CCard>
				<CCardHeader>Név: <input type="text" id="edit_nev" defaultValue={student.lastName + " " + student.firstName}/></CCardHeader>
				<CListGroup flush>
					<CListGroupItem>Születési év: <input type="number" id="edit_sz_ev" defaultValue={student.birthYear}/></CListGroupItem>
				</CListGroup>
				<CCardFooter>
					<button type='button' onClick={() => modosit(student)}>Diák módosítása</button>
				</CCardFooter>
				</CCard>
			</div>
		);
	}
}

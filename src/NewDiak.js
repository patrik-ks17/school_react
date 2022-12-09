import { CCard, CCardHeader, CListGroup, CListGroupItem, CCardFooter } from "@coreui/react";

export function NewDiak() {

	async function felvisz() {
		const nev = document.querySelector('#nev').value;
		let lastName = nev.split(' ')[0]
		let firstName;
		if (nev.split(' ').length > 2)
			firstName = nev.split(' ')[1] + " " + nev.split(' ')[2];
		else
			firstName = nev.split(' ')[1]
		const sz_ev = document.querySelector('#sz_ev').value;

		const body = JSON.stringify({
			firstName: firstName,
			lastName: lastName,
			birthYear: sz_ev
		})
		const response = await fetch("http://localhost:9000/students", { 
			method: "POST",
			body: body,
			headers: {
				'content-type':'application/json'
			}
		})
		if (!response.ok) {
			alert('Sikertelen tanuló felvétel!')
			return
		}
		document.querySelector('#nev').value = "";
		document.querySelector('#sz_ev').defaultValue = 2000;
	}
	return (
		<div className="col-md-4">
			<CCard className={"add_student"}>
			<CCardHeader>Név: <input type="text" id="nev"/></CCardHeader>
			<CListGroup flush>
				<CListGroupItem>Születési év: <input type="number" id="sz_ev" defaultValue="2000"/></CListGroupItem>
			</CListGroup>
			<CCardFooter>
				<button type='button' onClick={() => felvisz()}>Új diák felvitele</button>
			</CCardFooter>
			</CCard>
		</div>
	);
}

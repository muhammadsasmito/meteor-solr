import React from 'react';
import PdfContent from '../PdfContent/PdfContent';

const ResultDetail = React.createClass({

	propsTypes: {
		contentData : React.PropTypes.object.isRequired,
		menuActive : React.PropTypes.number.isRequired
	},

    componentWillMount(){
	  this.props.changeActiveMenu(1)
    },

	render(){
		let detail;
		switch (this.props.menuActive){
			case 1:
				return detail = (
					<div>
						<h2> {this.props.contentData.judul} </h2>
						<table className="table">
							<tbody>
							<tr>
								<td> <b> Pengarang </b> </td>
								<td>{this.props.contentData.pengarang}</td>
							</tr>
								<tr>
									<td> <b> Subyek </b></td>
										<td>{this.props.contentData.subyek}</td>
								</tr>
								<tr>
									<td><b> Klasifikasi </b></td>
										<td>{this.props.contentData.klasifikasi}</td>
								</tr>
								<tr>
									<td><b>Kota Terbit </b></td>
										<td>{this.props.contentData.kota}</td>
								</tr>
								<tr>
									<td><b>Tahun </b></td>
										<td>{this.props.contentData.tahun}</td>
								</tr>
								<tr>
									<td><b>Penerbit </b></td>
										<td>{this.props.contentData.penerbit}</td>
								</tr>
								<tr>
									<td><b>Jumlah Halaman </b></td>
										<td>{this.props.contentData.jml_hlm}</td>
								</tr>
								<tr>
									<td></td>
									<td></td>
								</tr>
							</tbody>
						</table>
					</div>
				);
			case 2:
				return detail = (
					<PdfContent
						result={this.props.contentData.file} />
				);
            default:
                return detail = (
                    <div>
                        <h2> {this.contentData.judul} </h2>
                        <table className="table">
                            <tbody>
                            <tr>
                                <td> <b> Pengarang </b> </td>
                                <td>{this.props.contentData.pengarang}</td>
                            </tr>
                            <tr>
                                <td> <b> Subyek </b></td>
                                <td>{this.props.contentData.subyek}</td>
                            </tr>
                            <tr>
                                <td><b> Klasifikasi </b></td>
                                <td>{this.props.contentData.klasifikasi}</td>
                            </tr>
                            <tr>
                                <td><b>Kota Terbit </b></td>
                                <td>{this.props.contentData.kota}</td>
                            </tr>
                            <tr>
                                <td><b>Tahun </b></td>
                                <td>{this.props.contentData.tahun}</td>
                            </tr>
                            <tr>
                                <td><b>Penerbit </b></td>
                                <td>{this.props.contentData.penerbit}</td>
                            </tr>
                            <tr>
                                <td><b>Jumlah Halaman </b></td>
                                <td>{this.props.contentData.jml_hlm}</td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                );
		}
		return detail;
	}

});

export default ResultDetail;
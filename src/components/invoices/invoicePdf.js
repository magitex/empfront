import React, { Component } from 'react';
import './invoicePdf.css';
import ReactToPdf from 'react-to-pdf';

const ref = React.createRef();
const options = {
    orientation: 'landscape',
    unit: 'in',
    format: [40,20]
};

export default class InvoicePdf extends Component {
    
    render() {
        return (
            <div className="container-fluid  "  ref={ref}>
            <div className='table1'>
            <div className="d-flex justify-content-between header">
                <div>logo</div>
                <div className='p-3'>
                    <h5>B 104, Pasha Court,</h5>
                    <h5>6-3-680, Somajiguda,</h5>
                    <h5>Hyderabad 500082.</h5>
                    <h5 className="mt-2">+91 9949509933</h5>
                    <h5 className="mt-2">www.jackfruitsolutions.com</h5>
                </div>
            </div>
            <hr/>
            <div>
            <h3 className='invoice table2'>Invoice</h3>
            <div className='d-flex justify-content-between'>               
                <div className='d-flex flex-column ponumber'>
                    <div className='pocontent1'>
                        <h5>PO No: JFP -011018</h5>
                        <h5>PO Date: 01st October, 2018</h5>
                    </div>                    
                    <div className='pocontent2'>
                    <h5>CIN # : U72900TG2018PTC129341</h5>
                    <h5>PAN # : AAECJ4298A</h5>
                    <h5>GST # : 36AAECJ4298A1ZM</h5>
                    </div>                                      
                </div>  
                <div className='innumber'>
                    <div className='invoice_no  '>
                    <h5>Invoice No: JFI-270721-04</h5>
                    <h5>Invoice Date: 27th July, 2021</h5>
                    <h5>Bill To: Pratap Health and Foods (India) Pvt. Ltd.</h5>
                    <h5>Address: 8-2-573, Road No 7, Banjara Hills, Hyderabad,Telangana 500034.</h5>
                    <h5>GSTIN: 36AACCP0735G1ZO</h5>
                    </div>
                </div>               
            </div>
            <table>
                <tbody>
                <tr>
                    <th>DESCRIPTION</th>
                    <th>HOURS</th>
                    <th>RATE/HR</th>
                    <th>AMOUNT IN RUPEES</th>
                </tr>
                <tr>
                    <td>PHF Static Website</td>
                    <td></td>
                    <td></td>
                    <td>5,000</td>
                </tr>  
                <tr>
                    <td className='gst'>GST @18%</td>
                    <td className='gst'></td>
                    <td className='gst'></td>
                    <td>900</td>
                </tr>   
                <tr>
                    <td className='gst'>TOTAL (Five Thousand nine hundred rupees only)</td>
                    <td className='gst'></td>
                    <td className='gst'></td>
                    <td>5,900</td>
                </tr> 
                </tbody>             
            </table>
            </div>
            <div className='d-flex  '>
                <div className='bankdetail'>
                    <h4><b>Bank Detail</b></h4>
                    <h5>Name - Jackfruittree Solutions Private Limited</h5>
                    <h5>Bank Name - ICICI Bank</h5>
                    <h5>Account Number - 410805000147</h5>
                    <h5>IFSC Code - ICIC0004108</h5>
                    <h5>Type – Current A/C</h5>
                </div>
                <div className='payment'>
                <h4><b>Payment Term</b></h4>
                <h5>100% on receipt of invoice.</h5>
                </div>
            </div>
            <div className='thank'>
                <h5>We thank you for your business!</h5>
            </div>
        </div>
            <div className='pt-2'>
                <h5>Sincerely,</h5>
                <h5>Soujanya Venkatesh</h5>
                <h5>(Director)</h5>
            </div> 
            <div>
    <ReactToPdf targetRef={ref} filename="div-blue.pdf" options={options} >
        {({toPdf}) => (
            <button onClick={toPdf}>Generate pdf</button>
        )}
    </ReactToPdf>
</div>
        </div>
        )
    }
}

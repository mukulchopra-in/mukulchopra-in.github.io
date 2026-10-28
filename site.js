
(function(){
const artBtn=n=>(+n>=1&&+n<=39)?`<button class="artlink" data-art="${+n}" title="Open UCP 600 Article ${+n}">${n}</button>`:n;
function artify(t){return t.replace(/Art(?:s)?\. ?(\d{1,2})/g,(m,n)=>"Art. "+artBtn(n));}
function refLinks(t){return t.replace(/\b(\d{1,2})\b/g,(m,n)=>artBtn(n));}
function openArticle(n){
  if(document.documentElement.dataset.page!=="ucp-600"){location.href="/ucp-600#art-"+n;return}
  show("ucp-600");
  const bar=document.querySelector('[data-tabs="ucp"]');
  const tb=bar&&bar.querySelector('[data-tab="arts"]');if(tb)tb.click();
  $("ucp-art-q").value="";renderArts("");
  const d=document.querySelector(`#ucp-arts details[data-artno="${n}"]`);
  if(d){d.open=true;setTimeout(()=>{try{d.scrollIntoView({block:"center"})}catch(_){}},120);}
}
document.addEventListener("click",e=>{const b=e.target.closest(".artlink");if(!b)return;e.preventDefault();e.stopPropagation();openArticle(b.dataset.art);},true);
/* ---------- data ---------- */
const UCP_GROUPS=[
 ["general","General provisions","1–5"],
 ["liab","Liabilities and obligations","6–13"],
 ["exam","Examination of documents","14–17"],
 ["docs","Documents","18–28"],
 ["misc","Miscellaneous provisions","29–33"],
 ["discl","Disclaimers","34–37"],
 ["transfer","Transfer and assignment","38–39"]
];
const UCP=[
 ["1","Application of UCP","general","The rules apply when the credit expressly says it is subject to them. They bind all parties unless the credit modifies or excludes a rule. They can also apply to standby credits, as far as they fit."],
 ["2","Definitions","general","Defines the core terms: advising bank, applicant, beneficiary, banking day, complying presentation, confirmation, honour, negotiation, nominated bank, presentation and presenter. Honour means paying at sight, giving a deferred payment undertaking, or accepting a draft. Negotiation means the nominated bank buying drafts or documents by advancing or agreeing to advance funds."],
 ["3","Interpretations","general","Sets reading rules. A credit is irrevocable even if it does not say so. A signature can be handwritten, stamped, symbolic or electronic. Vague issuer terms such as 'first class' or 'competent' allow any issuer except the beneficiary. 'On or about' means five days either side. 'To', 'until', 'from' and 'between' include the named date for shipment; 'before' and 'after' exclude it. First half and second half of a month mean the 1st–15th and 16th–last day; beginning, middle and end mean the 1st–10th, 11th–20th and 21st–last day. Branches in different countries count as separate banks."],
 ["4","Credits v. contracts","general","A credit is a separate transaction from the sale contract. Banks are not bound by the contract even if the credit refers to it. Issuing banks should discourage applicants from attaching contracts or proforma invoices to the credit."],
 ["5","Documents v. goods","general","Banks deal with documents only, not with the goods, services or performance the documents relate to."],
 ["6","Availability, expiry date and place for presentation","liab","The credit must name the bank it is available with (or say any bank), how it is available (sight payment, deferred payment, acceptance or negotiation) and an expiry date. A credit available with a nominated bank is also available with the issuing bank. It must not be available by a draft drawn on the applicant. Presentation must be made on or before the expiry date."],
 ["7","Issuing bank undertaking","liab","The issuing bank must honour a complying presentation and is irrevocably bound from the moment it issues the credit. It must also reimburse a nominated bank that has honoured or negotiated a complying presentation, at maturity for deferred payment or acceptance credits, whether or not that bank paid early."],
 ["8","Confirming bank undertaking","liab","A confirming bank must honour, or negotiate without recourse, a complying presentation, and is irrevocably bound from the moment it adds confirmation. A bank asked to confirm but unwilling to must tell the issuing bank without delay, and may still advise the credit without confirmation."],
 ["9","Advising of credits and amendments","liab","An advising bank gives no undertaking to pay. By advising, it signals that it is satisfied the credit looks authentic and that the advice reflects the terms accurately. A bank that will not advise, or cannot check authenticity, must say so without delay to the bank that sent it."],
 ["10","Amendments","liab","A credit cannot be amended or cancelled without the agreement of the issuing bank, any confirming bank and the beneficiary. The original terms stay in force for the beneficiary until it accepts the amendment. A presentation that complies with the amendment counts as acceptance. Partial acceptance is not allowed and counts as rejection. A clause saying an amendment takes effect unless rejected within a set time is disregarded."],
 ["11","Teletransmitted and pre-advised credits and amendments","liab","An authenticated teletransmission (such as SWIFT) is the operative credit, and any later mail confirmation is disregarded. If it says 'full details to follow', it is not operative until those details arrive. A bank that sends a pre-advice must then issue the operative credit without delay, on terms consistent with the pre-advice."],
 ["12","Nomination","liab","Being nominated does not oblige a bank to honour or negotiate unless it agrees or is the confirming bank. Nominating a bank to accept a draft or incur a deferred payment undertaking authorises it to prepay or buy that draft or undertaking. Receiving or forwarding documents does not by itself make a nominated bank liable."],
 ["13","Bank-to-bank reimbursement arrangements","liab","If the credit says reimbursement is subject to the ICC reimbursement rules (URR), those apply. Otherwise, the issuing bank must give the reimbursing bank a proper authorisation, and a claiming bank cannot be asked for a certificate of compliance. If reimbursement is not made on first demand, the issuing bank remains liable, including for any lost interest."],
 ["14","Standard for examination of documents","exam","Banks examine documents alone to decide whether they appear to comply. Each bank has up to five banking days after the day of presentation. A presentation that includes original transport documents (Arts. 19–25) must be made within 21 calendar days after shipment, unless the credit sets a different period, and in any case no later than the expiry date. Data need not be identical across documents but must not conflict. Outside the invoice, goods may be described in general terms. Documents not called for are disregarded, and conditions with no stated document are ignored. Addresses need not match the credit exactly but must be in the same country. The shipper need not be the beneficiary."],
 ["15","Complying presentation","exam","When the presentation complies, the issuing bank must honour, a confirming bank must honour or negotiate and forward the documents, and a nominated bank that honours or negotiates must forward them to the confirming or issuing bank."],
 ["16","Discrepant documents, waiver and notice","exam","A bank may refuse documents that do not comply. The issuing bank may ask the applicant to waive discrepancies, but this does not extend the examination period. A refusal must be a single notice, sent by the end of the fifth banking day after presentation, stating each discrepancy and what the bank is doing with the documents. A bank that fails to follow this cannot later claim the documents were discrepant."],
 ["17","Original documents and copies","exam","At least one original of each required document must be presented. A document with an apparently original signature, mark, stamp or label of its issuer is treated as an original. Where copies are asked for, copies or originals are acceptable. Terms like 'in duplicate' are met by one original and the rest copies."],
 ["18","Commercial invoice","docs","The invoice must appear to be issued by the beneficiary, be made out in the applicant's name, and be in the credit's currency. It need not be signed. The goods description must correspond with the credit. A bank may accept an invoice above the credit amount, as long as it does not pay more than the credit allows."],
 ["19","Transport document covering at least two different modes","docs","For multimodal shipments, the document must name the carrier and be signed by the carrier, master or a named agent. It must show dispatch, taking in charge or shipment at the place named in the credit, and the final destination. The issue date is treated as the shipment date unless a dated notation says otherwise. Transhipment may be shown as long as one document covers the whole carriage."],
 ["20","Bill of lading","docs","The bill must name the carrier and be signed by the carrier, master or a named agent. It must show goods shipped on board a named vessel at the port of loading in the credit, by pre-printed wording or a dated on-board notation. Ports must match the credit, and the full set of originals must be presented. It must not indicate a charter party. Transhipment may be shown if one bill covers the whole voyage, even where the credit prohibits it, if goods are in containers, trailers or LASH barges."],
 ["21","Non-negotiable sea waybill","docs","Follows the same requirements as the bill of lading: named carrier, signature, on-board shipment at the right port, correct ports and no charter party indication."],
 ["22","Charter party bill of lading","docs","Must be signed by the master, owner or charterer, or an agent for them, and show goods shipped on board at the port of loading in the credit. The port of discharge may be shown as a range or area if the credit allows. Banks do not examine the charter party contract itself, even if it is presented."],
 ["23","Air transport document","docs","Must name the carrier and be signed by the carrier or a named agent, and show the goods were accepted for carriage. The issue date counts as the shipment date unless the document carries a specific notation of the actual shipment date. Airports must match the credit. The original for consignor or shipper is enough, even if the credit asks for a full set."],
 ["24","Road, rail or inland waterway transport documents","docs","Must name the carrier and be signed or show receipt by the carrier or its agent, and show the places of shipment and destination stated in the credit. A road document must appear to be the original for consignor or shipper; a rail document marked 'duplicate' is accepted as an original."],
 ["25","Courier receipt, post receipt or certificate of posting","docs","A courier receipt must name the courier and be stamped or signed by it, with a pick-up or receipt date that counts as the shipment date. A post receipt must be stamped or signed at the place from which the credit says goods are to be shipped."],
 ["26","'On deck', 'shipper's load and count' and charges additional to freight","docs","A transport document must not show goods loaded on deck, though saying they may be loaded on deck is fine. Clauses such as 'shipper's load and count' or 'said by shipper to contain' are acceptable, as is a reference to charges in addition to freight."],
 ["27","Clean transport document","docs","Banks accept only clean transport documents, meaning no clause or notation expressly declaring that the goods or their packaging are defective. The word 'clean' need not appear on the document."],
 ["28","Insurance document and coverage","docs","Must be issued and signed by an insurer, underwriter or their agent, with all originals presented. Cover notes are not accepted. It must be dated no later than shipment unless cover starts from shipment, be in the credit's currency, and cover at least 110% of the CIF or CIP value if the credit is silent. Cover must run between the places stated in the credit. It may show a franchise or excess."],
 ["29","Extension of expiry date or last day for presentation","misc","If the expiry date or last day for presentation falls on a day the bank is closed for reasons other than force majeure, it moves to the next banking day. The nominated bank must state that presentation was made within the extended time. The latest shipment date is never extended."],
 ["30","Tolerance in credit amount, quantity and unit prices","misc","'About' or 'approximately' allows 10% more or less on the amount, quantity or unit price it refers to. If quantity is not stated in packing units or individual items, a 5% quantity tolerance applies, as long as the amount is not exceeded. When the full quantity is shipped and unit price is not reduced, a drawing up to 5% below the credit amount is allowed, even if partial shipments are prohibited."],
 ["31","Partial drawings or shipments","misc","Partial drawings and shipments are allowed unless the credit says otherwise. Several transport documents for shipment on the same vessel and journey to the same destination are not partial shipments, even with different dates or ports of loading; the latest date counts as the shipment date. Shipment on more than one means of conveyance is a partial shipment."],
 ["32","Instalment drawings or shipments","misc","If the credit sets a schedule of instalments and any instalment is missed, the credit stops being available for that instalment and all later ones."],
 ["33","Hours of presentation","misc","A bank does not have to accept a presentation outside its banking hours."],
 ["34","Disclaimer on effectiveness of documents","discl","Banks are not responsible for the form, accuracy, genuineness or legal effect of any document, nor for the description, quantity, quality or condition of the goods, nor for the good faith or acts of any party."],
 ["35","Disclaimer on transmission and translation","discl","Banks are not liable for delay, loss or errors in transmitting messages or documents sent as the credit requires. If a nominated bank finds the documents comply and forwards them, the issuing or confirming bank must honour even if the documents are lost in transit. Banks are not liable for translation errors."],
 ["36","Force majeure","discl","Banks are not liable for interruptions caused by events beyond their control, such as natural disasters, riots, war, terrorism or strikes. A credit that expires during such an interruption is not revived when the bank reopens."],
 ["37","Disclaimer for acts of an instructed party","discl","A bank that uses another bank to carry out the applicant's instructions does so at the applicant's cost and risk. If the credit puts charges on the beneficiary and they cannot be collected, the issuing bank remains liable for them. The applicant must indemnify banks against obligations imposed by foreign laws and usages."],
 ["38","Transferable credits","transfer","Only a credit expressly marked 'transferable' can be transferred, and the transferring bank need not agree beyond what it has consented to. It can be transferred once, in whole or part, to one or more second beneficiaries if partial drawings are allowed, but a second beneficiary cannot transfer it again. The transferred credit may reduce the amount, unit price, expiry, presentation period and shipment dates, and increase the insurance percentage. The first beneficiary may substitute its own invoice and draft."],
 ["39","Assignment of proceeds","transfer","Even if a credit is not transferable, the beneficiary may assign the proceeds under applicable law. This covers only the money, not the right to perform under the credit."]
];
const KEYNUMS=[
 ["5","banking days","Maximum time for each bank to examine documents, and to send a refusal notice","Art. 14(b), 16(d)"],
 ["21","calendar days","Default period for presenting documents after shipment, when the credit sets none. Applies to presentations that include original transport documents (Arts. 19–25), and never later than the expiry date.","Art. 14(c)"],
 ["110%","of CIF / CIP value","Minimum insurance cover when the credit does not state an amount","Art. 28(f)"],
 ["10%","more or less","Tolerance allowed by 'about' or 'approximately'","Art. 30(a)"],
 ["5%","quantity tolerance","For goods not counted in units, as long as the amount is not exceeded","Art. 30(b)"],
 ["5%","less in amount","Allowed when the full quantity is shipped at the full unit price","Art. 30(c)"],
 ["±5","days","Meaning of 'on or about' a date, both end dates included","Art. 3"],
 ["1","transfer only","A transferable credit cannot be transferred again by a second beneficiary","Art. 38(d)"],
 ["1","original minimum","At least one original of each required document","Art. 17(a)"],
 ["Next","banking day","Expiry or last presentation day on a bank holiday moves forward; shipment date does not","Art. 29"]
];
const ISBP=[
 ["General","Read the credit, the document and ISBP together","Data in a document is examined in the context of the credit, the document itself and standard practice. Examiners do not need to be experts in the goods."],
 ["General","Typing errors that do not change meaning are fine","A misspelling or typing error that does not affect the meaning of a word or sentence does not make a document discrepant."],
 ["General","Abbreviations are generally acceptable","Commonly used abbreviations, such as 'Ltd' for Limited or 'Int'l' for International, may be used in place of the full word."],
 ["General","Language","If the credit names a language for documents, the data must be in that language. If it is silent, documents may be issued in any language."],
 ["Drafts","Amount in words and figures","The amount in words should match the amount in figures. Where they conflict, the amount in words is treated as the amount demanded."],
 ["Invoices","No goods that the credit does not call for","An invoice must not show goods not called for by the credit, including samples or advertising material, even if marked free of charge."],
 ["Invoices","Description must correspond","The invoice goods description must correspond with the credit. It does not need to be a mirror image, but it must not conflict or describe different goods."],
 ["Transport documents","On-board notation","Where a bill of lading uses a pre-printed 'shipped on board' clause, the issue date is the shipment date. A separate dated on-board notation, where present, sets the shipment date."],
 ["Insurance","Cover for the right risks and amount","The insurance document must cover the risks the credit names, in the credit's currency, and for at least the required percentage of value."],
 ["Certificates","Issuer and function","A certificate of origin, inspection or analysis certificate must be issued by the party the credit names, relate to the invoiced goods, and appear to fulfil its function."]
];
const URDG=[
 ["Art. 5","Independence","A guarantee is independent of the underlying contract. The guarantor is not concerned with whether the applicant actually performed."],
 ["Art. 7","Non-documentary conditions","A condition in the guarantee with no document stated to show compliance is disregarded, unless the guarantor can confirm it from its own records."],
 ["Art. 15","Supporting statement","A demand must be supported by a statement that the applicant is in breach and in what respect, unless the guarantee excludes this requirement."],
 ["Art. 17","Partial and multiple demands","Demands may be made for part of the amount, and more than once, unless the guarantee says otherwise."],
 ["Art. 20","Time for examination","The guarantor has five business days following the day of presentation to examine the demand."],
 ["Art. 23","Extend or pay","If the beneficiary asks the guarantor to extend or pay, the guarantor may suspend payment for up to 30 calendar days while the applicant decides whether to agree to the extension."],
 ["Art. 24","Rejection notice","A guarantor rejecting a demand must send a single notice listing each reason, by the end of the fifth business day after presentation."],
 ["Art. 25","Expiry","A guarantee should state an expiry date or expiry event. If it states neither, it terminates three years after issue."],
 ["Art. 26","Force majeure","If presentation or payment is prevented by force majeure, the guarantee is extended by 30 calendar days from the date it would otherwise have expired."],
 ["Art. 34","Governing law","Unless stated otherwise, the guarantee is governed by the law of the place of the guarantor's branch that issued it."]
];
const URC=[
 ["Art. 4","Collection instruction","Every collection must be accompanied by an instruction stating it is subject to URC 522, with complete instructions. Banks act only on what the instruction says."],
 ["Art. 7","D/P and D/A","A collection should not contain bills payable at a future date with instructions to release documents against payment. If it does, the instruction must say clearly whether release is against acceptance or payment."],
 ["Art. 10","Goods sent to a bank","Goods should not be dispatched to a bank's address or consigned to its order without that bank's prior agreement."],
 ["Art. 12","Checking documents","Banks check only that the documents received appear to be as listed in the collection instruction. They do not examine their content."],
 ["Art. 24","Protest","The collection instruction should say whether the documents are to be protested if unpaid or not accepted. Without instructions, banks have no obligation to protest."],
 ["Art. 26","Advices","The presenting bank must advise payment, acceptance, non-payment or non-acceptance without delay to the bank from which it received the collection."]
];
const URR=[
 ["Applicability","Stated in the authorisation","URR 725 applies when the reimbursement authorisation says so. It does not override the credit's terms between issuing bank and beneficiary."],
 ["Independence","Separate from the credit","The reimbursement authorisation is separate from the credit. The reimbursing bank is not concerned with the credit's terms and does not examine documents."],
 ["No certificate of compliance","Claims stand alone","A reimbursement authorisation should not require the claiming bank to certify that it has complied with the credit's terms."],
 ["Processing time","Three banking days","The reimbursing bank has up to three banking days following the day it receives a claim to process it."],
 ["Charges","Normally for the issuing bank","Reimbursing bank charges are for the issuing bank's account. If they are to be borne by another party, the credit and authorisation must say so."]
];
const INCO_DOCS={
 "EXW":"Usually none from the seller; often a warehouse or cargo receipt. Rarely suitable for LCs.",
 "FCA":"Forwarder's or carrier's receipt, air waybill, or multimodal document. On-board bill of lading if the parties agree.",
 "CPT":"Transport document from the first carrier, freight prepaid.",
 "CIP":"Transport document, freight prepaid, plus insurance document (all-risks cover, 110%).",
 "DAP":"Delivery note or transport document; seller bears transport to destination.",
 "DPU":"Delivery note confirming goods unloaded at destination.",
 "DDP":"Delivery note; seller handles import clearance and duties.",
 "FAS":"Dock receipt or mate's receipt showing goods alongside the vessel.",
 "FOB":"On-board bill of lading, usually marked freight collect.",
 "CFR":"On-board bill of lading marked freight prepaid.",
 "CIF":"On-board bill of lading, freight prepaid, plus insurance document (minimum cover, 110%)."
};
const ISP=[
 ["Rule 1.06","Nature of standbys","A standby is irrevocable, independent of the underlying transaction, documentary, and binding from the moment it is issued."],
 ["Rule 3.13","Expiry on a non-business day","If the last day for presentation falls on a day the place for presentation is closed, a presentation on the next business day is in time."],
 ["Rule 3.14","Closure on a business day","If the place for presentation is closed for reasons such as force majeure on the last business day, the last day for presentation is extended to 30 calendar days after the place reopens, unless the standby says otherwise."],
 ["Rule 4.16","Demand for payment","A demand need not be separate from the beneficiary's statement or other required document, and need not be in the form of a draft."],
 ["Rule 5.01","Time to give notice of dishonour","Notice must be given within a time that is not unreasonable after presentation. Up to three business days is deemed not unreasonable; more than seven business days is deemed unreasonable."],
 ["Rule 6.02","Transfer","A standby is not transferable unless it says so. If transferable, it may be transferred in its entirety more than once, but not partially."]
];
const EUCP=[
 ["Scope","Paper, electronic or both","The eUCP covers presentations made wholly by electronic records or by a mix of electronic records and paper documents."],
 ["Credit terms","Format and place must be stated","A credit subject to the eUCP should state the format of each electronic record and the place for presenting electronic records. If a format is not stated, any format may be used."],
 ["Presentation","Notice of completeness","Electronic records may be sent separately, but the beneficiary must give a notice of completeness. The presentation is not treated as made until that notice is received."],
 ["Examination","When the clock starts","The time for examination starts on the banking day following the day the notice of completeness is received."],
 ["Corrupted records","Re-presentation","If a record appears corrupted, the bank may ask for it to be presented again. The examination time is suspended until it is, and if it is not re-presented within the stated time, it is treated as not presented."],
 ["Originals and copies","No separate original","Presenting one electronic record satisfies a requirement for one or more originals or copies of that record."]
];
const CASES=[
 ["Goods description on the invoice","Field 45A of the LC reads '100% cotton men's shirts, sizes M to XL'. The commercial invoice describes the goods as 'Cotton shirts'. The bill of lading says 'Shirts'.","Discrepant","The invoice must correspond with the credit's description (Art. 18(c)). It doesn't have to be a word-for-word copy, and details can appear in different places on the invoice. But 'Cotton shirts' leaves out that they are 100% cotton, that they are men's, and the size range. Read as a whole, the invoice doesn't describe the goods the credit calls for. The bill of lading is fine: documents other than the invoice may describe the goods in general terms that don't conflict with the credit (Art. 14(e))."],
 ["Presentation after 21 days","The LC expires on 30 April and states no presentation period. The bill of lading shows shipment on board on 2 March. Documents are presented on 28 March.","Discrepant","With no stated period, original transport documents must be presented within 21 calendar days after shipment, which here ends on 23 March. The expiry date being later does not help. See Art. 14."],
 ["Refusal on the sixth banking day","Documents are presented to the issuing bank on Tuesday, 10 November 2026. The bank, in India, finds a genuine discrepancy. It asks the applicant whether they will waive it, waits for a reply, and sends its refusal notice on Wednesday, 18 November.","Cannot refuse","Counting starts the day after presentation, and only banking days count: Wed 11 (1), Thu 12 (2), Fri 13 (3). Sat 14 is a 2nd Saturday and Sun 15 a Sunday, so both are skipped. Mon 16 (4), Tue 17 (5).\nThe fifth banking day ended on Tuesday, 17 November, so a notice on the 18th is late. Asking the applicant for a waiver does not extend the time (Art. 16(b)). Because the notice was late, the bank is precluded from claiming the documents do not comply (Art. 16(f)), even though the discrepancy is real. In practice, it has to honour the presentation.\nLesson: start the waiver request early, and send the refusal notice within five banking days whatever the applicant says.","Can the bank still refuse?"],
 ["Short shipment of bulk goods","The LC is for 500 metric tons of wheat, USD 100,000, partial shipments not allowed, with no 'about' wording. The seller ships 490 metric tons and invoices USD 98,000.","Not discrepant","Wheat in bulk is not counted in packing units or individual items, so a 5% quantity tolerance applies, provided the amount drawn does not exceed the credit. 490 tons is within 5%. See Art. 30."],
 ["Insurance dated after shipment","The bill of lading shows goods shipped on board on 10 May. The insurance certificate is dated 12 May and does not say cover is effective from the date of shipment.","Discrepant","The insurance document must be dated no later than shipment, unless it shows that cover is effective from a date no later than shipment. See Art. 28."],
 ["Different address for the applicant","The LC shows the applicant's address in Noida. The commercial invoice shows the applicant's address in Gurugram. Both are in India. The address does not appear in the consignee or notify party field of the transport document.","Not discrepant","Addresses of the beneficiary and applicant need not match the credit, as long as they are in the same country. The exception is when the address appears as part of the consignee or notify party details on a transport document. See Art. 14."]
];
const GLOSS_EXTRA=[
 ["Standby LC","A credit used as a backup guarantee, paid only if the applicant defaults. Often issued under ISP98."],
 ["Electronic record","Data created and transmitted electronically, presented under a credit subject to the eUCP."],
 ["Drawee","The party on whom a bill of exchange is drawn, who is asked to pay or accept it."],
 ["D/P and D/A","Documents against payment and documents against acceptance, the two ways a collection releases documents."],
 ["Demand guarantee","A bank's undertaking to pay on a complying demand, used as security rather than as payment."],
 ["Reimbursing bank","The bank instructed by the issuing bank to pay a claiming bank's reimbursement claim."],
 ["MT700","The SWIFT message format used to issue a documentary credit."],
 ["Incoterms","ICC trade terms that set out delivery, risk and cost responsibilities between seller and buyer."]
];
const DISC=[
 ["Late presentation","Documents presented after the presentation period or the expiry date. Track both dates from the day of shipment."],
 ["Amount over the credit","Invoice or draft exceeds the LC amount plus any allowed tolerance."],
 ["Goods description mismatch","The invoice description does not correspond with the LC. Other documents may describe goods in general terms, but the invoice must match."],
 ["Conflicting data","Weights, marks, or dates differ between documents. Data need not be identical, but it must not conflict."],
 ["Claused bill of lading","A notation that goods or packing were damaged makes the transport document unclean."],
 ["Missing on-board notation","The bill of lading does not show that goods were actually loaded, or the on-board date is missing."],
 ["Insurance dated after shipment","Or the cover is below 110% of the CIF or CIP value, or in a different currency."],
 ["Partial or transhipment breach","Goods shipped in parts, or transhipped, when the LC prohibits it."],
 ["Missing originals","Fewer originals presented than the LC or the document itself says were issued."]
];
const MT=[
 ["40E","Applicable rules","Shows which rules govern the credit. For a standard documentary credit this is usually 'UCP LATEST VERSION'. Check that it matches what was agreed. Other options include eUCP or ISP98, and the credit must then be read under those rules."],
 ["31D","Date and place of expiry","Documents must reach the place named here by this date. An expiry at the issuing bank abroad leaves you less time than one in your own country."],
 ["32B","Currency and amount","The invoice and draft cannot exceed this, beyond any tolerance in 39A."],
 ["39A","Amount tolerance","For example 10/10 allows 10% more or less. If blank, only the Art. 30 rules apply."],
 ["41a","Available with … by …","Which bank pays or negotiates, and whether by sight payment, deferred payment, acceptance or negotiation."],
 ["42C","Drafts at","The tenor of the draft: at sight, or a number of days after sight or shipment. Draft wording must match."],
 ["43P / 43T","Partial shipments and transhipment","Allowed or not allowed. Plan your shipping before agreeing to 'not allowed'."],
 ["44E / 44F","Ports of loading and discharge","The transport document must show these ports as named. A different port is a discrepancy."],
 ["44C","Latest date of shipment","The on-board date cannot be later than this. Unlike the expiry date, it is not extended for a bank holiday."],
 ["45A","Description of goods","The invoice description must correspond with this field (Art. 18(c)). Reproducing it in full is the safest practice. A mirror image isn't required, but omitting or changing details invites a discrepancy. Other documents may describe the goods in general terms that do not conflict."],
 ["46A","Documents required","List every document, the number of originals and copies, and who must issue or sign each one."],
 ["47A","Additional conditions","Where most surprises sit. A condition with no document to show compliance is disregarded, but every documentary condition must be met."],
 ["71D","Charges","Who pays bank charges outside the issuing bank. Factor these into your price."],
 ["48","Period for presentation","Days after shipment to present documents. If blank, 21 calendar days apply, always within expiry."],
 ["49","Confirmation instructions","CONFIRM, MAY ADD or WITHOUT. If you need confirmation, arrange it before you ship."]
];
const TIPS=[
 ["Read the LC the day it arrives","Ask for amendments before shipment, when the buyer still has a reason to agree."],
 ["Work backwards from three dates","Latest shipment (44C), presentation period (48) and expiry (31D). The earliest limit is the one that counts."],
 ["Reproduce the goods description in full","The invoice must correspond with 45A. Copying it in full is the safest approach. It need not be a mirror image, but omitted or altered details are one of the most common reasons for refusal."],
 ["Keep data consistent across documents","Quantities, weights, marks and LC number should not conflict between invoice, packing list and transport document."],
 ["Match names, addresses and ports","Use the names and ports exactly as the LC states them."],
 ["Count the originals","Present the number of originals 46A asks for, and the full set of any bill of lading issued in more than one original."],
 ["Check signatures and endorsements","Bills of lading made out to order and insurance documents usually need endorsing."],
 ["Read 47A twice","Documentary conditions there are as binding as 46A. Note any special requirements on certificates or wording."],
 ["Present early","Leave time inside the presentation period to correct a discrepancy and present again."]
];
const GLOSS=[
 ["Applicant","The buyer who asks its bank to issue the credit."],
 ["Beneficiary","The seller in whose favour the credit is issued."],
 ["Issuing bank","The buyer's bank that issues the LC and gives the main payment undertaking."],
 ["Advising bank","Passes the LC to the beneficiary after checking it is genuine."],
 ["Confirming bank","Adds its own payment undertaking on top of the issuing bank's."],
 ["Nominated bank","The bank the credit is available with for payment or negotiation."],
 ["Complying presentation","Documents that meet the LC terms, UCP 600 and standard banking practice."],
 ["Discrepancy","Any way in which the documents fail to comply with the credit."],
 ["Sight LC","Payment is made as soon as complying documents are presented."],
 ["Usance LC","Payment is made at a future date, such as 90 days after shipment."],
 ["Back-to-back LC","A second LC issued on the strength of a first one, often used by traders."],
];
const INCO=[
 ["EXW","Ex Works","Any","When goods are made available at seller's premises","No","No","Buyer / Buyer"],
 ["FCA","Free Carrier","Any","When handed to buyer's carrier at named place","No","No","Seller / Buyer"],
 ["CPT","Carriage Paid To","Any","When handed to the first carrier","Yes","No","Seller / Buyer"],
 ["CIP","Carriage and Insurance Paid To","Any","When handed to the first carrier","Yes","Yes (all-risks cover)","Seller / Buyer"],
 ["DAP","Delivered at Place","Any","At destination, ready for unloading","Yes","No","Seller / Buyer"],
 ["DPU","Delivered at Place Unloaded","Any","At destination, once unloaded","Yes","No","Seller / Buyer"],
 ["DDP","Delivered Duty Paid","Any","At destination, ready for unloading","Yes","No","Seller / Seller"],
 ["FAS","Free Alongside Ship","Sea","When placed alongside the vessel at the port of shipment","No","No","Seller / Buyer"],
 ["FOB","Free on Board","Sea","When loaded on board the vessel","No","No","Seller / Buyer"],
 ["CFR","Cost and Freight","Sea","When loaded on board the vessel","Yes","No","Seller / Buyer"],
 ["CIF","Cost, Insurance and Freight","Sea","When loaded on board the vessel","Yes","Yes (minimum cover)","Seller / Buyer"]
];
const esc=s=>String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const artHTML=a=>`<details class="art" data-artno="${a[0]}"><summary><span class="artno">Art. ${a[0]}</span><b>${esc(a[1])}</b></summary><div class="body">${esc(a[3])}</div></details>`;
const $=id=>document.getElementById(id)||document.createElement("input");

$("disc-list").innerHTML=DISC.map(d=>`<div class="disc-row"><h3>${esc(d[0])}</h3><p class="muted">${esc(d[1])}</p></div>`).join("");
$("mt-list").innerHTML=MT.map(m=>`<div class="mt-row"><span class="mt-tag">${m[0]}</span><div><b>${esc(m[1])}</b><p class="muted">${artify(esc(m[2]))}</p></div></div>`).join("");
document.querySelectorAll("#page-ucp-600 .doc .ref").forEach(r=>{r.innerHTML=r.innerHTML.replace(/Art\. ([\d &;amp]+)/,(m,g)=>"Art. "+refLinks(g))});
$("tips-list").innerHTML=TIPS.map(t=>`<li><span class="tick" aria-hidden="true"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12l5 5L20 7"/></svg></span><div><b>${esc(t[0])}</b><p class="muted">${esc(t[1])}</p></div></li>`).join("");
$("gloss-list").innerHTML=GLOSS.concat(GLOSS_EXTRA).sort((x,y)=>x[0].localeCompare(y[0])).map(g=>`<div><dt>${esc(g[0])}</dt><dd>${esc(g[1])}</dd></div>`).join("");

function renderInco(q){
  q=(q||"").toLowerCase();
  const rows=INCO.filter(r=>!q||r.join(" ").toLowerCase().includes(q));
  $("inco-body").innerHTML=rows.length?rows.map(r=>`<tr><td class="term">${r[0]}<div class="muted" style="font-family:var(--body);font-weight:400;font-size:.82rem">${esc(r[1])}</div></td><td><span class="tag">${r[2]==="Sea"?"Sea & inland waterway":"Any mode"}</span></td><td>${esc(r[3])}</td><td>${r[4]}</td><td>${esc(r[5])}</td><td>${r[6]}</td></tr>`).join(""):`<tr><td colspan="6" class="muted">No term matches "${esc(q)}".</td></tr>`;
}
function renderUcpSearch(q){
  q=(q||"").toLowerCase();
  const rows=UCP.filter(a=>!q||a.join(" ").toLowerCase().includes(q));
  $("ucp-search").innerHTML=rows.length?rows.map(artHTML).join(""):`<p class="muted">No article matches "${esc(q)}".</p>`;
}

/* ---------- trade finance renderers ---------- */
function renderArts(q){
  q=(q||"").trim().toLowerCase();
  const html=UCP_GROUPS.map(g=>{
    const items=UCP.filter(a=>a[2]===g[0]&&(!q||("art "+a[0]+" "+a[1]+" "+a[3]).toLowerCase().includes(q)||a[0]===q));
    if(!items.length)return "";
    return `<div class="artgroup" id="grp-${g[0]}"><div class="artgroup-h"><h3>${esc(g[1])}</h3><span class="muted">Articles ${g[2]}</span></div><div class="articles">${items.map(artHTML).join("")}</div></div>`;
  }).join("");
  $("ucp-arts").innerHTML=html||`<p class="muted">No article matches "${esc(q)}".</p>`;
}
$("ucp-groupnav").innerHTML=UCP_GROUPS.map(g=>`<button class="chip" data-grp="${g[0]}">${esc(g[1])} <span class="muted">${g[2]}</span></button>`).join("");
$("ucp-groupnav").addEventListener("click",e=>{const b=e.target.closest("[data-grp]");if(!b)return;$("ucp-art-q").value="";renderArts("");const el=$("grp-"+b.dataset.grp);if(el)try{el.scrollIntoView({block:"start"})}catch(_){}});
$("ucp-art-q").addEventListener("input",e=>renderArts(e.target.value));
renderArts("");
$("ucp-nums").innerHTML=KEYNUMS.map(n=>`<div class="num"><div class="num-big">${esc(n[0])}</div><div class="num-unit">${esc(n[1])}</div><p class="muted">${esc(n[2])}</p><span class="ref">${refLinks(esc(n[3]))}</span></div>`).join("");
const ptsHTML=arr=>arr.map(p=>`<div class="pt"><span class="ref">${esc(p[0])}</span><h3>${esc(p[1])}</h3><p class="muted">${esc(p[2])}</p></div>`).join("");
$("isp-pts").innerHTML=ptsHTML(ISP);$("eucp-pts").innerHTML=ptsHTML(EUCP);
$("case-list").innerHTML=CASES.map((c,i)=>`<div class="case"><span class="ref">Case ${i+1}</span><h3>${esc(c[0])}</h3><p>${esc(c[1])}</p><p class="case-q">${esc(c[4]||"Discrepant or not?")}</p><details class="reveal"><summary>Show the answer</summary><div class="ans"><span class="verdict ${c[2]==="Discrepant"?"v-bad":"v-ok"}">${esc(c[2])}</span><p class="muted">${artify(esc(c[3])).replace(/\n/g,"</p><p class=\"muted\">")}</p></div></details></div>`).join("");
/* ---------- URC 522 and URDG 758 article data ---------- */
const URC_GROUPS=[
 ["gen","General provisions and definitions","1–4"],
 ["form","Form and structure of collections","5–8"],
 ["liab","Liabilities and responsibilities","9–15"],
 ["pay","Payment","16–19"],
 ["int","Interest, charges and expenses","20–21"],
 ["oth","Other provisions","22–26"]
];
const URC_ARTS=[
 ["1","Application of URC 522","gen","The rules apply to every collection whose collection instruction says it is subject to URC 522, and bind all parties unless they agree otherwise or local law says otherwise. A bank does not have to handle a collection, but if it decides not to, it must tell the party that sent it without delay."],
 ["2","Definition of collection","gen","A collection is the handling of documents by banks, following instructions, to obtain payment or acceptance, or to deliver documents against payment, acceptance or other terms. Financial documents are bills of exchange, promissory notes, cheques and similar; commercial documents are invoices, transport documents and the like. A clean collection covers financial documents alone. A documentary collection covers financial documents with commercial documents, or commercial documents without any financial document."],
 ["3","Parties to a collection","gen","The principal (usually the exporter) entrusts the collection to its bank. The remitting bank sends it on. A collecting bank is any bank other than the remitting bank that handles it. The presenting bank is the collecting bank that presents the documents to the drawee, the party (usually the buyer) to whom presentation is made."],
 ["4","Collection instruction","gen","Every set of documents must travel with a collection instruction that says it is subject to URC 522 and gives complete and precise instructions. Banks act only on those instructions and do not look into the documents to find instructions. The instruction should cover the parties, the drawee's full address, amount and currency, documents enclosed, terms of payment or acceptance, charges, interest, method of payment and what to do on non-payment or non-acceptance."],
 ["5","Presentation","form","Presentation means making the documents available to the drawee as instructed. Documents go to the drawee in the form received, though banks may add stamps and endorsements needed for the collection. If the principal names a collecting bank, the remitting bank uses it; otherwise it may choose one."],
 ["6","Sight and acceptance","form","For documents payable at sight, the presenting bank presents for payment without delay. For documents payable at a later date, it presents for acceptance without delay where acceptance is called for, and presents for payment no later than the maturity date."],
 ["7","Release of commercial documents","form","A collection should not include a bill of exchange payable at a future date together with an instruction to release documents against payment. If it does, the instruction must say clearly whether documents are released against acceptance (D/A) or payment (D/P). If it does not say, documents are released only against payment, and the collecting bank is not responsible for any delay this causes."],
 ["8","Creation of documents","form","If the remitting bank asks the collecting bank or the drawee to create documents that are not in the collection, such as bills of exchange, trust receipts or letters of undertaking, the remitting bank must supply their form and wording. Otherwise the collecting bank is not responsible for the documents created."],
 ["9","Good faith and reasonable care","liab","Banks must act in good faith and exercise reasonable care."],
 ["10","Documents v. goods, services or performances","liab","Goods should not be sent directly to a bank or consigned to its order without the bank first agreeing. If they are, the bank has no duty to take delivery and the goods stay at the sender's risk. Banks have no duty to protect the goods; if they do act to protect them, they take no liability, and any costs fall on the party that sent the collection."],
 ["11","Disclaimer for acts of an instructed party","liab","A bank that uses another bank to carry out the principal's instructions does so for the principal's account and risk, even if it chose that other bank itself. The party giving instructions must indemnify the banks against obligations imposed by foreign laws and usages."],
 ["12","Disclaimer on documents received","liab","Banks must check only that the documents received appear to be as listed in the collection instruction, and must tell the sender without delay if any are missing or different. They have no further duty to examine the documents. If the remitting bank does not hear of a difference, it cannot later dispute what the collecting bank received."],
 ["13","Disclaimer on effectiveness of documents","liab","Banks are not responsible for the form, accuracy, genuineness or legal effect of any document, nor for the description, quantity, condition or value of the goods, nor for the good faith or acts of anyone else involved."],
 ["14","Disclaimer on delays, loss in transit and translation","liab","Banks are not liable for delay or loss of messages, letters or documents in transit, nor for translation errors. They are also not liable for delays caused by the need to get clarification of instructions they have received."],
 ["15","Force majeure","liab","Banks are not liable for consequences of interruptions to their business caused by events beyond their control, such as natural disasters, riots, war, terrorism or strikes."],
 ["16","Payment without delay","pay","Amounts collected, less charges and expenses where applicable, must be made available without delay to the party that sent the collection instruction. Unless otherwise agreed, the collecting bank pays only the remitting bank."],
 ["17","Payment in local currency","pay","For documents payable in the currency of the country of payment, the presenting bank releases documents against payment in that currency only if it can be used immediately as the collection instruction specifies, unless instructed otherwise."],
 ["18","Payment in foreign currency","pay","For documents payable in another currency, the presenting bank releases documents against payment in that currency only if it can be remitted immediately as instructed, unless instructed otherwise."],
 ["19","Partial payments","pay","In a clean collection, partial payments may be accepted where the law allows, but the financial documents are released only once paid in full. In a documentary collection, partial payments are accepted only if the instruction specifically allows them, and documents are released only after full payment, unless instructed otherwise."],
 ["20","Interest","int","If interest is to be collected and the drawee refuses to pay it, the presenting bank may still release the documents against payment or acceptance without the interest, unless the instruction expressly says interest may not be waived. The instruction should state the rate, period and basis. If interest cannot be waived and the drawee refuses, the bank does not release the documents and informs the bank it received them from."],
 ["21","Charges and expenses","int","If charges are for the drawee's account and the drawee refuses them, the presenting bank may release documents without collecting them, unless the instruction expressly says charges may not be waived. Waived charges fall on the principal and may be deducted from the proceeds. Banks may ask for advance payment of expected expenses."],
 ["22","Acceptance","oth","The presenting bank must see that the form of acceptance on a bill of exchange appears complete and correct. It is not responsible for the genuineness of signatures or the authority of the person signing."],
 ["23","Promissory notes and other instruments","oth","The presenting bank is not responsible for the genuineness of any signature, or the authority of any signatory, on a promissory note, receipt or other instrument."],
 ["24","Protest","oth","The collection instruction should say whether to protest, or take other legal steps, on non-payment or non-acceptance. Without such instructions, banks have no duty to protest. Any protest fees are for the principal's account."],
 ["25","Case-of-need","oth","If the principal names a representative to act if payment or acceptance is refused, the collection instruction should state that person's powers clearly. Without that, banks will not accept instructions from the case-of-need."],
 ["26","Advices","oth","The collecting bank must advise payment, acceptance, non-payment or non-acceptance without delay, quoting the remitting bank's reference. On non-payment or non-acceptance, the presenting bank should try to find out why and report it. If it receives no instructions within 60 days of that advice, it may return the documents to the bank it received them from, with no further responsibility."]
];
const URC_KEY=[
 ["D/P","if a usance bill's terms are unclear","Where a collection includes a bill payable at a future date and the instruction does not say D/A or D/P, documents are released only against payment. The collecting bank is not responsible for any delay this causes.","Art. 7"],
 ["No","examination","Banks only check that the documents received match the list in the collection instruction. They do not examine what the documents say.","Art. 12"],
 ["100%","before release","In a documentary collection, documents are released only after full payment, unless partial payments are specifically allowed.","Art. 19"],
 ["Waivable","interest and charges","The presenting bank may release documents without collecting interest or charges, unless the instruction says they may not be waived.","Art. 20, 21"],
 ["60","days","If no instructions arrive within 60 days of an advice of non-payment or non-acceptance, the documents may be sent back.","Art. 26"],
 ["No","protest by default","Without clear instructions, banks have no duty to protest an unpaid or unaccepted bill.","Art. 24"]
];

const URDG_GROUPS=[
 ["gen","General provisions","1–7"],
 ["issue","Instructions, issue, advising and amendments","8–11"],
 ["amt","Liability and amount","12–13"],
 ["dem","Demands and examination","14–24"],
 ["end","Reduction, termination and force majeure","25–26"],
 ["disc","Disclaimers, indemnity and charges","27–32"],
 ["law","Transfer, governing law and jurisdiction","33–35"]
];
const URDG_ARTS=[
 ["1","Application of URDG","gen","The rules apply to a demand guarantee or counter-guarantee that expressly says it is subject to them, and bind all parties except where the guarantee changes or excludes them. Where a guarantee is issued subject to URDG at a counter-guarantor's request, the counter-guarantee is also subject to URDG unless it says otherwise. A guarantee issued on or after 1 July 2010 that names URDG without a version is subject to URDG 758."],
 ["2","Definitions","gen","Defines the key terms: applicant, beneficiary, guarantor, counter-guarantor, instructing party, advising party, business day, demand, complying demand, presentation, supporting statement, expiry, expiry date and expiry event, among others. A business day is a day the place of business where the act is to be done is regularly open."],
 ["3","Interpretation","gen","Branches of a guarantor in different countries count as separate entities. A requirement for originals or copies of an electronic document is met by one electronic document. In dates, \"from\", \"to\", \"until\", \"till\" and \"between\" include the date mentioned; \"before\" and \"after\" exclude it. Vague words such as \"first class\" or \"competent\" allow any issuer except the beneficiary or the applicant."],
 ["4","Issue and effectiveness","gen","A guarantee is issued when it leaves the guarantor's control. It is irrevocable once issued, even if it does not say so. The beneficiary can present a demand from the date of issue, or from any later date or event the guarantee specifies."],
 ["5","Independence of guarantee and counter-guarantee","gen","A guarantee is independent of the underlying contract and of the application to issue it; the guarantor is not concerned with or bound by them. Referring to the underlying contract for identification does not change this. The guarantor's promise to pay cannot be defeated by claims or defences arising from any relationship other than its own with the beneficiary. A counter-guarantee is likewise independent of the guarantee it supports."],
 ["6","Documents v. goods, services or performance","gen","Guarantors deal with documents, not with the goods, services or performance the documents relate to."],
 ["7","Non-documentary conditions","gen","A guarantee should not contain a condition, other than a date or a period, without stating a document that shows the condition has been met. If no document is stated and the guarantor cannot confirm the condition from its own records or an index named in the guarantee, the condition is disregarded."],
 ["8","Content of instructions and guarantees","issue","Instructions and guarantees should be clear and precise and avoid excessive detail. A guarantee should state the applicant, beneficiary and guarantor, the underlying relationship, the maximum amount and currency, the expiry, the terms for demanding payment, the form and language of documents, and who pays charges."],
 ["9","Application not taken up","issue","If a guarantor is not prepared or not able to issue a guarantee when it receives the application, it should tell the party that gave the instructions without delay."],
 ["10","Advising of guarantee or amendment","issue","A guarantee can be advised to the beneficiary through an advising party. By advising it, that party confirms it is satisfied the guarantee appears authentic and that the advice reflects its terms accurately; it takes on no payment obligation. A party that will not advise, or cannot check authenticity, must say so without delay."],
 ["11","Amendments","issue","An amendment does not bind the beneficiary without its agreement, but binds the guarantor from the moment it is issued unless and until the beneficiary rejects it. Partial acceptance of an amendment counts as rejection. A clause saying an amendment takes effect unless rejected within a set time is disregarded. The guarantor informs the instructing party of the beneficiary's acceptance or rejection without delay."],
 ["12","Extent of guarantor's liability","amt","The guarantor is liable to the beneficiary only under the terms of the guarantee and these rules, and only up to the guarantee amount."],
 ["13","Variation of amount of guarantee","amt","A guarantee may provide for its amount to reduce or increase on specified dates or events. Where an event triggers the change, it is treated as happening only when the document stated in the guarantee is presented, or when the guarantor can confirm it from its own records or an index named in the guarantee."],
 ["14","Presentation","dem","A demand must be presented to the guarantor at the place of issue or another place stated in the guarantee, on or before expiry. A presentation can say it will be completed later, but must be completed before expiry. Electronic presentation is possible only if the guarantee allows it; otherwise presentation is on paper. Each presentation should identify the guarantee it relates to."],
 ["15","Requirements for demand","dem","A demand must come with any documents the guarantee requires and, in any case, a supporting statement from the beneficiary saying in what respect the applicant is in breach of the underlying contract. Under a counter-guarantee, the demand must be supported by a statement that a complying demand has been received under the guarantee. These statements are required unless the guarantee expressly excludes them."],
 ["16","Information about demand","dem","The guarantor must inform the instructing party, or the counter-guarantor, without delay of any demand and of any request to extend the expiry instead of paying."],
 ["17","Partial and multiple demands","dem","A demand may be for less than the full amount, and more than one demand may be made unless the guarantee says otherwise. A demand for more than the amount available is not complying. If only one demand is allowed and it is rejected, the beneficiary may still present another demand before expiry."],
 ["18","Separateness of each demand","dem","Making a non-complying demand, or withdrawing a demand, does not stop the beneficiary making another timely demand. Paying a non-complying demand does not waive the requirement that other demands must comply."],
 ["19","Examination","dem","The guarantor decides, on the basis of the presentation alone, whether a demand appears on its face to be complying. Data in the demand and documents need not be identical but must not conflict with each other or the guarantee. Documents the guarantee does not ask for are disregarded and may be returned."],
 ["20","Time for examination of demand; payment","dem","The guarantor has five business days following the day of presentation to examine a demand and decide whether it complies. Expiry after presentation does not shorten this time. If the demand complies, the guarantor must pay."],
 ["21","Currency of payment","dem","Payment is made in the currency of the guarantee. If the guarantor cannot pay in that currency because of an impediment beyond its control, it pays in the currency of the place of payment."],
 ["22","Transmission of copies of complying demand","dem","The guarantor must send a copy of the complying demand and related documents to the instructing party, or the counter-guarantor, without delay."],
 ["23","Extend or pay","dem","Where a complying demand asks, as an alternative, for the expiry to be extended, the guarantor may suspend payment for up to 30 calendar days following receipt of the demand while the parties decide. If the extension is granted, the demand is treated as withdrawn. If it is not granted, the demand is paid without a further demand. The guarantor may refuse to extend even if instructed to, and then pays."],
 ["24","Non-complying demand, waiver and notice","dem","A guarantor may reject a non-complying demand. It may ask the instructing party for a waiver, but this does not extend the examination time. A rejection must be a single notice, given no later than the close of the fifth business day following the day of presentation, listing each discrepancy. A guarantor that fails to do this cannot later claim the demand did not comply."],
 ["25","Reduction and termination","end","The guarantee amount is reduced by payments made, partial releases and any reduction clause. A guarantee terminates on expiry, when nothing more is payable, or when the beneficiary presents a signed release. If a guarantee states neither an expiry date nor an expiry event, it terminates three years after issue, and a counter-guarantee terminates 30 calendar days after its guarantee. An expiry date falling on a non-business day at the place of presentation moves to the next business day."],
 ["26","Force majeure","end","If force majeure prevents presentation or payment, a guarantee that would have expired during that time is extended by 30 calendar days from its original expiry. Examination of a demand already presented is suspended until the guarantor reopens, and a complying demand that could not be paid is paid once the force majeure ends."],
 ["27","Disclaimer on effectiveness of documents","disc","Guarantors are not responsible for the form, accuracy, genuineness or legal effect of any document presented, nor for the good faith or acts of anyone who issued it."],
 ["28","Disclaimer on transmission and translation","disc","Guarantors are not liable for delay, loss or errors in transmitting messages or documents, nor for errors in translation."],
 ["29","Disclaimer for acts of another party","disc","A guarantor that uses another party to carry out the applicant's instructions does so for the applicant's account and risk."],
 ["30","Limits on exemption from liability","disc","None of the disclaimers protect a guarantor from liability for failing to act in good faith."],
 ["31","Indemnity for foreign laws and usages","disc","The applicant must indemnify the guarantor, and the counter-guarantor must indemnify the guarantor, against obligations imposed by foreign laws and usages."],
 ["32","Liability for charges","disc","A party that asks another to perform services is liable for that party's charges. If the guarantee says charges are for the beneficiary and they cannot be collected, the instructing party remains liable. A guarantee should not make payment conditional on charges being paid."],
 ["33","Transfer of guarantee and assignment of proceeds","law","A guarantee can be transferred only if it expressly says it is transferable, and then only for the full amount available at the time; it may be transferred more than once. A counter-guarantee is not transferable. The beneficiary may assign proceeds under applicable law, but the guarantor need not pay an assignee unless it has agreed."],
 ["34","Governing law","law","Unless the guarantee says otherwise, it is governed by the law of the place of the guarantor's branch or office that issued it. A counter-guarantee is governed by the law of the place of the counter-guarantor's issuing branch or office."],
 ["35","Jurisdiction","law","Unless the guarantee says otherwise, disputes go to the competent court of the country where the guarantor's issuing branch or office is located; for a counter-guarantee, the country of the counter-guarantor's issuing branch or office."]
];
const URDG_KEY=[
 ["5","business days","Time to examine a demand, and the deadline for a single notice of rejection, counted from the day after presentation.","Art. 20, 24"],
 ["30","calendar days","The longest a guarantor may suspend payment after an \"extend or pay\" demand.","Art. 23"],
 ["3","years","When a guarantee has no expiry date or expiry event, it terminates three years after issue.","Art. 25"],
 ["30","days after","A counter-guarantee with no expiry terminates 30 calendar days after its guarantee terminates.","Art. 25"],
 ["+30","days","Extension of a guarantee that would have expired while force majeure prevented presentation or payment.","Art. 26"],
 ["1","supporting statement","Every demand needs a statement of the applicant's breach, unless the guarantee expressly excludes it.","Art. 15"]
];
const URR_EXTRA=[
 ["Reimbursement undertaking","An optional extra commitment","If the issuing bank asks and the reimbursing bank agrees, the reimbursing bank can give the claiming bank its own irrevocable undertaking to pay claims."],
 ["Expiry","Authorisations should not expire","A reimbursement authorisation should not carry an expiry date or a latest date for claims, except where the reimbursing bank has given a reimbursement undertaking."],
 ["Interest claims","Settled between the banks","A claim for loss of interest because of late reimbursement is a matter between the claiming bank and the issuing bank, unless the reimbursing bank has agreed otherwise."]
];

/* generic article renderer used by URC and URDG pages */
function setupRuleArts(cfg){
  const box=$(cfg.box),nav=$(cfg.nav),q=$(cfg.q),nums=$(cfg.nums);
  if(!box||!nav||!q)return;
  const card=a=>`<details class="art" data-artno="${a[0]}"><summary><span class="artno">Art. ${a[0]}</span><b>${esc(a[1])}</b></summary><div class="body">${esc(a[3])}</div></details>`;
  const draw=t=>{t=(t||"").trim().toLowerCase();
    const html=cfg.groups.map(g=>{const items=cfg.arts.filter(a=>a[2]===g[0]&&(!t||a[0]===t||("art "+a[0]+" "+a[1]+" "+a[3]).toLowerCase().includes(t)));
      return items.length?`<div class="artgroup" id="${cfg.pre}-grp-${g[0]}"><div class="artgroup-h"><h3>${esc(g[1])}</h3><span class="muted">Articles ${g[2]}</span></div><div class="articles">${items.map(card).join("")}</div></div>`:"";}).join("");
    box.innerHTML=html||`<p class="muted">No article matches "${esc(t)}".</p>`;};
  nav.innerHTML=cfg.groups.map(g=>`<button class="chip" data-grp="${g[0]}">${esc(g[1])} <span class="muted">${g[2]}</span></button>`).join("");
  nav.addEventListener("click",e=>{const b=e.target.closest("[data-grp]");if(!b)return;q.value="";draw("");const el=$(cfg.pre+"-grp-"+b.dataset.grp);if(el)try{el.scrollIntoView({block:"start"})}catch(_){}});
  q.addEventListener("input",e=>draw(e.target.value));
  draw("");
  if(nums)nums.innerHTML=cfg.key.map(n=>`<div class="num"><div class="num-big">${esc(n[0])}</div><div class="num-unit">${esc(n[1])}</div><p class="muted">${esc(n[2])}</p><span class="ref">${esc(n[3])}</span></div>`).join("");
}
setupRuleArts({pre:"urc",box:"urc-arts",nav:"urc-groupnav",q:"urc-art-q",nums:"urc-nums",groups:URC_GROUPS,arts:URC_ARTS,key:URC_KEY});
setupRuleArts({pre:"urdg",box:"urdg-arts",nav:"urdg-groupnav",q:"urdg-art-q",nums:"urdg-nums",groups:URDG_GROUPS,arts:URDG_ARTS,key:URDG_KEY});

const URC_TIPS=[
 ["Say D/P or D/A, clearly","State the release terms in the collection instruction. Avoid sending a usance bill with a D/P instruction; if you must, say so expressly.","Art. 7"],
 ["Make sure the documents control the goods","D/P protects you only if the buyer needs the documents to get the goods. Use a full set of order bills of lading. With an air waybill or sea waybill consigned to the buyer, the buyer may be able to collect the goods without paying.",""],
 ["Give the drawee's full address","Include the complete postal address, phone and email. Banks are not liable for delays caused by an incomplete address.","Art. 4"],
 ["Never consign goods to the bank","Don't ship goods to the collecting bank or to its order without its prior agreement. The bank has no duty to take delivery, and the goods stay at your risk.","Art. 10"],
 ["Decide on interest and charges","If interest or charges must not be waived, say so expressly. Otherwise the presenting bank may release documents without collecting them.","Art. 20, 21"],
 ["Give protest instructions","If you want an unpaid or unaccepted bill protested, say so. Without instructions, banks have no duty to protest.","Art. 24"],
 ["Name a case-of-need, or none","A local representative can help if the buyer refuses, but only if the instruction states their powers clearly.","Art. 25"],
 ["Respond to non-payment advices","When the bank reports non-payment or non-acceptance, send instructions promptly. After 60 days without them, documents may come back.","Art. 26"],
 ["Know your buyer","In a collection no bank promises to pay. Check the buyer's standing, and consider export credit insurance for D/A terms.",""],
 ["Track export realisation","Keep an eye on the deadlines for realising export proceeds under RBI rules, and follow up overdue bills with your bank.",""]
];
const URDG_TIPS=[
 ["Check the rules clause","If you expect URDG 758 to apply, make sure the guarantee says it is subject to URDG 758. Otherwise local law and the bank's own wording apply.","Art. 1"],
 ["Always set an expiry","Give a clear expiry date or a documented expiry event. Without one, a URDG guarantee runs for three years.","Art. 25"],
 ["Keep the wording independent","Refer to the contract only to identify it. Copying contract terms into the guarantee adds excessive detail and invites disputes.","Art. 5, 8"],
 ["Avoid non-documentary conditions","If a condition matters, name the document that proves it. Otherwise the guarantor will disregard it.","Art. 7"],
 ["Include the supporting statement","A beneficiary's demand must say in what respect the applicant is in breach, unless the guarantee excludes this.","Art. 15"],
 ["Present early, at the right place","Present at the place stated, before expiry, and leave a margin. A presentation to be completed later must still be completed before expiry.","Art. 14"],
 ["Plan for extend or pay","Applicants should be ready to decide quickly. The guarantor can hold payment for at most 30 calendar days.","Art. 23"],
 ["Reject properly, or not at all","Guarantors: send one notice listing every discrepancy within five business days, or lose the right to reject.","Art. 24"],
 ["Use reduction clauses","For advance payment guarantees, tie reductions to documents such as shipment or milestone certificates.","Art. 13"]
];
const tipsHTML=arr=>arr.map(t=>`<li><span class="tick" aria-hidden="true"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12l5 5L20 7"/></svg></span><div><b>${esc(t[0])}</b><p class="muted">${esc(t[1])}</p>${t[2]?`<span class="tip-ref">${esc(t[2])}</span>`:""}</div></li>`).join("");
[["urc-tips",URC_TIPS],["urdg-tips",URDG_TIPS]].forEach(([id,d])=>{const el=$(id);if(el)el.innerHTML=tipsHTML(d)});
[["isbp-pts",ISBP],["urr-pts",URR.concat(URR_EXTRA)]].forEach(([id,d])=>{const el=$(id);if(el)el.innerHTML=ptsHTML(d)});
$("inco-docs").innerHTML=INCO.map(r=>`<tr><td class="term">${r[0]}<div class="muted" style="font-family:var(--body);font-weight:400;font-size:.82rem">${esc(r[1])}</div></td><td>${esc(r[3])}</td><td>${r[4]}</td><td>${esc(r[5])}</td><td>${esc(INCO_DOCS[r[0]])}</td></tr>`).join("");


/* ---------- Incoterms map ---------- */
const IM_STAGES=[
 ["Seller's premises",'<path d="M3 20V10l5 3V10l5 3V6h3v14z"/><path d="M3 20h18"/><path d="M18 20V4h3v16"/>'],
 ["Export clearance",'<rect x="5" y="3" width="14" height="18" rx="2"/><path d="M9 8h6M9 12h6M9 16h3"/>'],
 ["Handed to carrier / alongside ship",'<path d="M2 16h11V8H2z"/><path d="M13 11h4l3 3v2h-7"/><circle cx="6" cy="18" r="1.6"/><circle cx="16" cy="18" r="1.6"/>'],
 ["Loaded on board",'<path d="M4 3v18"/><path d="M4 4h12l-3 4"/><path d="M13 8v3"/><rect x="10" y="11" width="6" height="4"/><path d="M2 21h20"/>'],
 ["Main carriage",'<path d="M3 15h18l-2 4H5z"/><path d="M6 15V9h8v6"/><path d="M14 11h3v4"/><path d="M2 21c2 0 2-1 4-1s2 1 4 1 2-1 4-1 2 1 4 1 2-1 4-1"/>'],
 ["Import clearance",'<circle cx="12" cy="12" r="8"/><path d="M8.5 12l2.5 2.5 4.5-5"/>'],
 ["Arrived at destination",'<path d="M12 21s-6-5.6-6-10a6 6 0 0 1 12 0c0 4.4-6 10-6 10z"/><circle cx="12" cy="11" r="2.2"/>'],
 ["Unloaded at destination",'<rect x="4" y="11" width="10" height="8"/><path d="M14 19h6"/><path d="M17 19V7"/><path d="M14 7h6"/>']
];
// s = seller pays, b = buyer pays; risk = stage index after which risk passes (0-based); ins = seller insures main carriage
const IM_TERMS=[
 ["any","EXW","Ex Works","sbbbbbbb",0,false,"The seller only makes the goods available at its own premises. The buyer handles and pays for everything else, including loading, export clearance, freight, insurance and import. Risk passes as soon as the goods are made available."],
 ["any","FCA","Free Carrier","sssbbbbb",2,false,"The seller clears the goods for export and hands them to the buyer's carrier at the named place. Risk passes at that handover. The buyer pays main freight, insurance and import costs."],
 ["any","CPT","Carriage Paid To","sssssbbb",2,false,"The seller pays freight to the named destination, but risk passes early, when the goods are handed to the first carrier. If goods are damaged in transit, the loss is the buyer's even though the seller paid the freight."],
 ["any","CIP","Carriage and Insurance Paid To","sssssbbb",2,true,"Like CPT, but the seller must also buy insurance for the buyer's benefit, on all-risks cover (ICC A). Risk still passes at handover to the first carrier."],
 ["any","DAP","Delivered at Place","sssssbsb",6,false,"The seller delivers to the named destination, with goods ready for unloading. The seller bears risk until then. The buyer pays for unloading, import clearance and duties."],
 ["any","DPU","Delivered at Place Unloaded","sssssbss",7,false,"The only term where the seller must unload the goods at destination. Risk passes once unloaded. Import clearance and duties stay with the buyer."],
 ["any","DDP","Delivered Duty Paid","sssssssb",6,false,"The most the seller can take on: delivery to the destination, import clearance and duties paid, goods ready for unloading. The buyer only unloads."],
 ["sea","FAS","Free Alongside Ship","sssbbbbb",2,false,"The seller places the goods alongside the vessel at the port of loading, cleared for export. Risk passes there. The buyer pays loading, sea freight and everything after."],
 ["sea","FOB","Free on Board","ssssbbbb",3,false,"The seller pays until the goods are loaded on board the vessel at the port of loading. Risk passes once on board. The buyer pays sea freight, insurance and import costs."],
 ["sea","CFR","Cost and Freight","sssssbbb",3,false,"The seller pays sea freight to the port of destination, but risk passes once the goods are on board at the port of loading. The buyer insures the voyage."],
 ["sea","CIF","Cost, Insurance and Freight","sssssbbb",3,true,"Like CFR, but the seller also buys marine insurance for the buyer, on at least minimum cover (ICC C) at 110% of the value. Risk still passes once on board."]
];
function renderIncoMap(){
  const m=$("inco-map");if(!m)return;
  const icon=p=>`<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${p}</svg>`;
  let h=`<div class="im-row im-head" role="row"><div class="im-term" role="columnheader"><span class="muted">Term</span></div>`+
    IM_STAGES.map((st,i)=>`<div class="im-stage" role="columnheader"><span class="im-ico">${icon(st[1])}</span><span class="im-n">${i+1}</span><span class="im-sl">${esc(st[0])}</span></div>`).join("")+`</div>`;
  let last="";
  IM_TERMS.forEach((t,k)=>{
    if(t[0]!==last){last=t[0];h+=`<div class="im-group" role="row"><span>${t[0]==="any"?"Any mode of transport":"Sea and inland waterway only"}</span></div>`;}
    h+=`<button class="im-row im-term-row" role="row" data-k="${k}" aria-pressed="false"><div class="im-term" role="rowheader"><b>${t[1]}</b><span>${esc(t[2])}</span></div>`+
      t[3].split("").map((c,i)=>`<div class="im-cell ${c==="s"?"c-s":"c-b"}${i===4&&t[5]?" c-ins":""}" role="cell" aria-label="${IM_STAGES[i][0]}: ${c==="s"?"seller":"buyer"} pays${t[4]===i?", risk passes to buyer after this stage":""}">${i===4&&t[5]?'<span class="ins">INS</span>':""}${t[4]===i?'<span class="risk" title="Risk passes to buyer"></span>':""}</div>`).join("")+`</button>`;
  });
  m.innerHTML=h;
  const ex=$("inco-explain");
  const pick=k=>{m.querySelectorAll(".im-term-row").forEach(r=>r.setAttribute("aria-pressed",String(+r.dataset.k===k)));const t=IM_TERMS[k];
    ex.innerHTML=`<span class="rcode">${t[1]}</span><div><b>${esc(t[2])}</b><p>${esc(t[6])}</p><p class="im-risk-line">Risk passes to buyer: after <b>${esc(IM_STAGES[t[4]][0].toLowerCase())}</b>.</p></div>`;};
  m.addEventListener("click",e=>{const r=e.target.closest(".im-term-row");if(r)pick(+r.dataset.k)});
  pick(8);
}
renderIncoMap();


/* ---------- UCP 600: LC flow map ---------- */
const LCM_STEPS=[
 [1,"contract","Sale contract","Buyer and seller agree the sale, with payment by letter of credit. The credit will be separate from this contract.","Art. 4"],
 [2,"credit","Application","The buyer (applicant) asks its bank to issue a credit in the seller's favour.",""],
 [3,"credit","Issuance","The issuing bank issues the credit, usually by SWIFT MT700, to a bank in the seller's country. It is now irrevocably bound.","Art. 7"],
 [4,"credit","Advice","The advising bank checks that the credit appears authentic and passes it to the seller. It may also add its confirmation.","Art. 8, 9"],
 [5,"goods","Shipment","The seller ships the goods by the latest shipment date and gathers the documents the credit asks for.","Art. 14"],
 [6,"docs","Presentation","The seller presents the documents to the nominated bank, within the presentation period and before expiry.","Art. 6, 14"],
 [7,"money","Examination and payment","The nominated bank has up to five banking days to examine the documents. If they comply, it pays, accepts or negotiates.","Art. 12, 14, 15"],
 [8,"docs","Forwarding","The nominated bank sends the documents to the issuing bank and claims reimbursement.","Art. 15"],
 [9,"money","Reimbursement","The issuing bank examines the documents and, if they comply, reimburses the nominated bank.","Art. 7"],
 [10,"money","Buyer pays","The buyer pays or reimburses its bank, under their own agreement.",""],
 [11,"docs","Documents released","The issuing bank releases the documents, which the buyer uses to take delivery of the goods.",""]
];
// geometry: [x1,y1,x2,y2, badgeX, badgeY]
const LCM_GEO={1:[222,42,418,42,320,42],5:[418,84,222,84,320,84],2:[70,102,70,326,70,214],10:[120,102,120,326,120,214],11:[170,326,170,102,170,214],
 3:[222,344,418,344,320,344],8:[418,372,222,372,320,372],9:[222,400,418,400,320,400],4:[470,326,470,102,470,214],6:[520,102,520,326,520,214],7:[570,326,570,102,570,214]};
function renderLcMap(){
  const svg=$("lc-map"),list=$("lc-map-steps"),ex=$("lc-map-explain");if(!(svg instanceof SVGElement))return;
  const box=(x,y,t,sub)=>`<g class="lcm-box"><rect x="${x}" y="${y}" width="200" height="82" rx="14"/><text x="${x+100}" y="${y+36}" text-anchor="middle" class="lcm-bt">${t}</text><text x="${x+100}" y="${y+58}" text-anchor="middle" class="lcm-bs">${sub}</text></g>`;
  let g=`<defs>${["credit","goods","docs","money","contract"].map(k=>`<marker id="ah-${k}" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" class="ah ah-${k}"/></marker>`).join("")}</defs>`;
  g+=box(20,20,"Buyer","Applicant")+box(420,20,"Seller","Beneficiary")+box(20,326,"Issuing bank","Buyer's bank")+box(420,326,"Nominated bank","Advising · seller's bank");
  LCM_STEPS.forEach(st=>{const n=st[0],k=st[1],[x1,y1,x2,y2,bx,by]=LCM_GEO[n];
    const start=k==="contract"?` marker-start="url(#ah-${k})"`:"";
    g+=`<g class="lcm-step lk-${k}" data-n="${n}" tabindex="0" role="button" aria-label="Step ${n}: ${esc(st[2])}"><line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" class="lcm-line"${start} marker-end="url(#ah-${k})"/><circle cx="${bx}" cy="${by}" r="12" class="lcm-badge"/><text x="${bx}" y="${by+4}" text-anchor="middle" class="lcm-bn">${n}</text></g>`;});
  svg.innerHTML=g;
  list.innerHTML=LCM_STEPS.map(st=>`<li><button class="lcm-li" data-n="${st[0]}" aria-pressed="false"><span class="lcm-num lk-${st[1]}">${st[0]}</span><span>${esc(st[2])}</span></button></li>`).join("");
  const pick=n=>{const st=LCM_STEPS[n-1];
    svg.querySelectorAll(".lcm-step").forEach(e=>e.classList.toggle("on",+e.dataset.n===n));svg.classList.add("has-on");
    list.querySelectorAll(".lcm-li").forEach(e=>e.setAttribute("aria-pressed",String(+e.dataset.n===n)));
    ex.innerHTML=`<span class="lcm-num big lk-${st[1]}">${n}</span><div><b>${esc(st[2])}</b><p>${esc(st[3])}</p>${st[4]?`<span class="tip-ref">${typeof refLinks==="function"?"Art. "+refLinks(esc(st[4].replace(/^Art\. /,""))):esc(st[4])}</span>`:""}</div>`;};
  const h=e=>{const t=e.target.closest("[data-n]");if(t)pick(+t.dataset.n)};
  svg.addEventListener("click",h);list.addEventListener("click",h);
  svg.addEventListener("keydown",e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault();h(e)}});
  pick(1);
}
renderLcMap();

/* ---------- UCP 600: key dates timeline ---------- */
function renderTimeline(){
  const svg=$("lc-timeline");if(!(svg instanceof SVGElement))return;
  svg.setAttribute("viewBox","0 50 760 236");
  const X={ship:60,lsd:165,pres:330,last:470,exp:610,exam:695},y=165;
  let g=`<defs><marker id="tl-ah" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" class="tl-ahp"/></marker></defs>`;
  g+=`<line x1="24" y1="${y}" x2="748" y2="${y}" class="tl-axis" marker-end="url(#tl-ah)"/>`;
  g+=`<rect x="${X.ship}" y="${y-42}" width="${X.last-X.ship}" height="26" rx="6" class="tl-band"/><text x="${(X.ship+X.last)/2}" y="${y-25}" text-anchor="middle" class="tl-bandt">Presentation period · 21 days if the LC is silent (Art. 14c)</text>`;
  g+=`<rect x="${X.pres}" y="${y+18}" width="${X.exam-X.pres}" height="26" rx="6" class="tl-band2"/><text x="${(X.pres+X.exam)/2}" y="${y+35}" text-anchor="middle" class="tl-band2t">Up to 5 banking days to examine (Art. 14b)</text>`;
  const pt=(x,cls,lab,s1,s2,up)=>{
    const tx=up?[y-90,y-76,y-62]:[y+72,y+86,y+100];
    return `<line x1="${x}" y1="${up?y-56:y+56}" x2="${x}" y2="${y}" class="tl-tick"/><circle cx="${x}" cy="${y}" r="7" class="tl-pt ${cls}"/>`+
      `<text x="${x}" y="${tx[0]}" text-anchor="middle" class="tl-lab">${lab}</text>`+(s1?`<text x="${x}" y="${tx[1]}" text-anchor="middle" class="tl-sub">${s1}</text>`:"")+(s2?`<text x="${x}" y="${tx[2]}" text-anchor="middle" class="tl-sub">${s2}</text>`:"");};
  g+=pt(X.ship,"p-ship","Shipment","on-board date","",true);
  g+=pt(X.last,"p-last","Last day to present","period end or expiry,","whichever is earlier",true);
  g+=pt(X.exp,"p-exp","Expiry (31D)","if a holiday: next","banking day (Art. 29a)",true);
  g+=pt(X.lsd,"p-lsd","Latest shipment (44C)","never extended","(Art. 29c)",false);
  g+=pt(X.pres,"p-pres","Documents presented","","",false);
  g+=pt(X.exam,"p-exam","Honour, or one","refusal notice","(Art. 15, 16)",false);
  svg.innerHTML=g;
}
renderTimeline();

/* ---------- tabs ---------- */
document.querySelectorAll("[data-tabs]").forEach(bar=>{
  const name=bar.dataset.tabs;
  bar.addEventListener("click",e=>{
    const b=e.target.closest("[data-tab]");if(!b)return;
    bar.querySelectorAll("[data-tab]").forEach(x=>x.setAttribute("aria-pressed",x===b));
    try{const l=b.offsetLeft-bar.offsetLeft-16;bar.scrollTo({left:Math.max(0,l),behavior:"smooth"})}catch(_){}
    document.querySelectorAll(`[data-tabpanel^="${name}:"]`).forEach(p=>p.hidden=p.dataset.tabpanel!==name+":"+b.dataset.tab);
  });
});

/* ---------- routing ---------- */
const TOOL_SUB=["lc-decoder","tool-emi", "tool-elig", "tool-prepay", "tool-lc", "tool-usance", "tool-sip", "tool-fd", "tool-cmp"];
const PAGES=["home","trade-finance","ucp-600","isbp-821","urdg-758","urc-522","urr-725","incoterms","isp98","eucp","case-studies","glossary","tools",...TOOL_SUB,"blog","blog-lc-discrepancies","blog-export-payment-methods","blog-prepay-or-invest","contact"];
const BLOG_SUB=["blog-lc-discrepancies", "blog-export-payment-methods", "blog-prepay-or-invest"];
const TF_SUB=["ucp-600","isbp-821","urdg-758","urc-522","urr-725","incoterms","isp98","eucp","case-studies","glossary"];
function toTop(page){
  try{window.scrollTo(0,0)}catch(_){}
  try{(document.scrollingElement||document.documentElement).scrollTop=0}catch(_){}
  const sec=$("page-"+page);
  const h=sec&&sec.querySelector("h1,h2");
  const target=$("top-anchor");
  const go=()=>{
    try{target.scrollIntoView({block:"start"})}catch(_){}
    try{window.scrollTo(0,0)}catch(_){}
  };
  if(h){h.setAttribute("tabindex","-1");try{h.focus({preventScroll:true})}catch(_){}}
  go();setTimeout(go,50);
}
const PAGE_META={
 "home":["Mukul Chopra","Banker, finance professional and trade finance enthusiast. Plain-English trade finance guides and free finance calculators."],
 "trade-finance":["Trade Finance","Plain-English guides to UCP 600, ISBP 821, URDG 758, URC 522, URR 725, ISP98, eUCP and Incoterms 2020."],
 "ucp-600":["UCP 600 in plain English","All 39 articles of UCP 600 summarised, with key numbers, an MT700 field guide, document checklists and common discrepancies."],
 "isbp-821":["ISBP 821","How banks examine documents under UCP 600: practice points from ISBP 821."],
 "urdg-758":["URDG 758 demand guarantees","Key provisions of URDG 758 and how a demand guarantee differs from a letter of credit."],
 "urc-522":["URC 522 documentary collections","D/P and D/A collections under URC 522: parties and key provisions."],
 "urr-725":["URR 725 bank reimbursements","How bank-to-bank reimbursements work under URR 725."],
 "incoterms":["Incoterms 2020","The 11 Incoterms 2020 rules, where risk passes, and which LC documents usually go with each."],
 "isp98":["ISP98 standby credits","Key rules of ISP98 for standby letters of credit."],
 "eucp":["eUCP 2.1","How electronic presentations work under eUCP Version 2.1."],
 "case-studies":["Trade finance case studies","Real-world LC scenarios: discrepant or not? With the UCP 600 rule behind each answer."],
 "glossary":["Trade finance glossary","Quick definitions of trade finance terms."],
 "tools":["Calculators and tools","Free home loan, LC date, usance maturity, SIP and FD calculators."],
 "lc-decoder":["LC decoder: MT700 and MT707","Paste an MT700 letter of credit or MT707 amendment and get a plain-English reading, watch-outs and a document checklist. Runs in your browser."],
 "tool-emi":["EMI calculator","Home loan EMI with total interest and a year-wise repayment schedule."],
 "tool-elig":["Home loan eligibility calculator","Estimate how much home loan your income can support."],
 "tool-prepay":["Home loan prepayment calculator","Interest saved and tenure reduced by a lump-sum prepayment."],
 "tool-lc":["LC date calculator","Last day for presentation, examination deadline and shipment date check under UCP 600, with Indian bank holidays."],
 "tool-usance":["Usance bill maturity calculator","Maturity date of a usance draft, adjusted for bank holidays."],
 "tool-sip":["SIP calculator","Estimated value of a monthly SIP."],
 "tool-fd":["Fixed deposit calculator","FD maturity value with quarterly compounding."],
 "tool-cmp":["Compare loan offers","Compare two loan offers by EMI and total cost including fees."],
 "blog":["Blog","Short, practical pieces on trade finance, home loans and personal finance."],
 "blog-lc-discrepancies":["The 5 discrepancies I see most often, and how exporters can avoid them","The five most common LC discrepancies, why they happen and how exporters can avoid them, with the UCP 600 rule behind each one."],
 "blog-export-payment-methods":["LC, documentary collection or advance payment: which one fits your export deal?","Advance payment, letter of credit, D/P and D/A collections and open account compared for exporters: risk, cost, and when each one fits."],
 "blog-prepay-or-invest":["Prepay the home loan or invest the money? A simple way to compare","Should you prepay your home loan or invest the surplus? A simple comparison using your loan rate, tax and expected returns, with a worked example."],
 "contact":["Contact","Get in touch with Mukul Chopra."]
};
function setMeta(page){
  const m=PAGE_META[page]||PAGE_META.home;
  try{document.title=page==="home"?"Mukul Chopra · Banker, finance professional":m[0]+" · Mukul Chopra";
    const d=document.querySelector('meta[name="description"]');if(d)d.setAttribute("content",m[1]);}catch(_){}
}
function show(route,opts){
  opts=opts||{};
  const page=PAGES.includes(route)?route:"home";
  PAGES.forEach(p=>{$("page-"+p).hidden=p!==page});
  document.querySelectorAll("nav.menu a").forEach(a=>{
    const navPage=TF_SUB.includes(page)?"trade-finance":TOOL_SUB.includes(page)?"tools":BLOG_SUB.includes(page)?"blog":page;
    if(a.dataset.route===navPage)a.setAttribute("aria-current","page");else a.removeAttribute("aria-current");
  });
  setMeta(page);
  if(page==="tool-emi"&&window._emiYrs)drawEMIChart(window._emiYrs);
  toTop(page);
}
const hdr=document.querySelector("header.site"),mbtn=$("menu-btn");
function setMenu(open){hdr.classList.toggle("open",open);mbtn.setAttribute("aria-expanded",open);mbtn.setAttribute("aria-label",open?"Close menu":"Open menu");}
mbtn.addEventListener("click",e=>{e.stopPropagation();setMenu(!hdr.classList.contains("open"))});
window.addEventListener("click",e=>{if(e.target.closest&&e.target.closest("nav.menu a"))setMenu(false)},true);
document.querySelectorAll("[data-jump]").forEach(b=>b.addEventListener("click",()=>$(b.dataset.jump).scrollIntoView({behavior:"smooth",block:"start"})));

/* ---------- money helpers ---------- */
const num=id=>{const v=parseFloat(String($(id).value).replace(/,/g,""));return isFinite(v)?v:0};
const fmtIN=v=>Math.round(v).toLocaleString("en-IN");
function inrWords(v){
  v=Math.round(v);if(!v)return "";
  const t=(x,u)=>{const r=Math.round(x*100)/100;return "₹"+(Number.isInteger(r)?r:r.toFixed(2).replace(/0$/,""))+" "+u};
  if(v>=1e7)return t(v/1e7,v>=2e7?"crore":"crore");
  if(v>=1e5)return t(v/1e5,"lakh");
  if(v>=1e3)return t(v/1e3,"thousand");
  return "₹"+v;
}
function setMoney(el){
  const raw=el.value,pos=el.selectionStart==null?raw.length:el.selectionStart;
  const after=raw.slice(pos).replace(/\D/g,"").length;
  const digits=raw.replace(/\D/g,"").replace(/^0+(?=\d)/,"");
  const out=digits?fmtIN(+digits):"";
  el.value=out;
  if(document.activeElement===el){let i=out.length,c=0;while(i>0&&c<after){i--;if(/\d/.test(out[i]))c++}try{el.setSelectionRange(i,i)}catch(_){}}
  const w=$(el.id+"-w");if(w)w.textContent=inrWords(+digits||0);
}
const inr=v=>isFinite(v)?"₹"+Math.round(v).toLocaleString("en-IN"):"–";
function emi(P,annual,years){const n=Math.round(years*12),r=annual/1200;if(n<=0||P<=0)return 0;if(r===0)return P/n;const f=Math.pow(1+r,n);return P*r*f/(f-1)}
const yrsMonths=m=>{m=Math.max(0,Math.round(m));const y=Math.floor(m/12),mm=m%12;return (y?y+" yr"+(y>1?"s":""):"")+(y&&mm?" ":"")+(mm||!y?mm+" mo":"")};

const shortIN=v=>v>=1e7?(v/1e7).toFixed(v>=1e8?0:1).replace(/\.0$/,"")+" Cr":v>=1e5?(v/1e5).toFixed(v>=1e6?0:1).replace(/\.0$/,"")+" L":v>=1e3?Math.round(v/1e3)+"K":String(Math.round(v));
function calcEMI(){const P=num("emi-p"),R=num("emi-r"),N=num("emi-n"),e=emi(P,R,N),n=Math.round(N*12),tot=e*n;
  $("emi-out").textContent=inr(e);$("emi-int").textContent=inr(tot-P);$("emi-tot").textContent=inr(tot);
  $("emi-bar").style.width=(tot>0?P/tot*100:0)+"%";
  // year-wise schedule
  const r=R/1200;let bal=P;const yrs=[];
  for(let m=1;m<=n&&bal>0.005;m++){const it=bal*r;let pr=e-it;if(pr>bal)pr=bal;bal-=pr;
    const y=Math.ceil(m/12);if(!yrs[y-1])yrs[y-1]={p:0,i:0,b:0};yrs[y-1].p+=pr;yrs[y-1].i+=it;yrs[y-1].b=Math.max(0,bal);}
  $("emi-sched").innerHTML=yrs.map((y,k)=>`<tr><td>${k+1}</td><td>${inr(y.p)}</td><td>${inr(y.i)}</td><td>${inr(y.b)}</td></tr>`).join("")||`<tr><td colspan="4" class="muted">Enter a loan amount, rate and tenure.</td></tr>`;
  drawEMIChart(yrs);
}
function drawEMIChart(yrs){
  const svg=$("emi-chart");if(!svg)return;
  const W=Math.max(300,Math.round(svg.getBoundingClientRect().width||640)),H=W<500?220:260,L=W<500?46:58,Rm=8,T=14,B=30,iw=W-L-Rm,ih=H-T-B;window._emiYrs=yrs;
  svg.setAttribute("viewBox",`0 0 ${W} ${H}`);
  if(!yrs.length){svg.innerHTML="";return}
  const max=Math.max(...yrs.map(y=>y.p+y.i));
  const step=(()=>{const raw=max/4,p=Math.pow(10,Math.floor(Math.log10(raw))),f=raw/p;return (f<=1?1:f<=2?2:f<=2.5?2.5:f<=5?5:10)*p})();
  const top=Math.ceil(max/step)*step,sy=v=>T+ih-v/top*ih;
  const bw=iw/yrs.length,gap=Math.min(6,bw*.25);
  let g="";
  for(let v=0;v<=top+1e-6;v+=step){const y=sy(v);g+=`<line x1="${L}" x2="${W-Rm}" y1="${y}" y2="${y}" class="gl"/><text x="${L-8}" y="${y+4}" text-anchor="end" class="ax">₹${shortIN(v)}</text>`}
  yrs.forEach((d,k)=>{const x=L+k*bw+gap/2,w=bw-gap,yp=sy(d.p),yi=sy(d.p+d.i);
    g+=`<rect x="${x}" y="${yp}" width="${w}" height="${T+ih-yp}" class="bp"><title>Year ${k+1}: principal ${inr(d.p)}</title></rect><rect x="${x}" y="${yi}" width="${w}" height="${yp-yi}" class="bi"><title>Year ${k+1}: interest ${inr(d.i)}</title></rect>`});
  const lbl=[0,Math.floor((yrs.length-1)/2),yrs.length-1].filter((v,i,a)=>a.indexOf(v)===i);
  lbl.forEach(k=>{g+=`<text x="${L+k*bw+bw/2}" y="${H-10}" text-anchor="middle" class="ax">Year ${k+1}</text>`});
  svg.innerHTML=g;
}
function calcElig(){const inc=num("el-inc"),ex=num("el-ex"),f=num("el-f")/100,r=num("el-r")/1200,n=Math.round(num("el-n")*12);
  const can=Math.max(0,inc*f-ex);let L=0;if(n>0)L=r===0?can*n:can*(Math.pow(1+r,n)-1)/(r*Math.pow(1+r,n));
  $("el-out").textContent=inr(L);$("el-emi").textContent=inr(can);$("el-left").textContent=inr(inc-ex-can);}
function calcPrepay(){const B=num("pp-b"),rr=num("pp-r"),r=rr/1200,n=Math.round(num("pp-n")*12),x=Math.min(num("pp-x"),B);
  const E=emi(B,rr,n/12);const B2=B-x;let n2=0;
  if(B2>0){n2=r===0?B2/E:-Math.log(1-B2*r/E)/Math.log(1+r)}
  const oldInt=E*n-B,newInt=E*n2-B2;
  $("pp-emi").textContent=inr(E);$("pp-out").textContent=inr(oldInt-newInt);
  $("pp-time").textContent=yrsMonths(n-n2);$("pp-new").textContent=yrsMonths(n2);}
function calcSIP(){const P=num("sip-p"),i=num("sip-r")/1200,n=Math.round(num("sip-n")*12);
  const fv=i===0?P*n:P*((Math.pow(1+i,n)-1)/i)*(1+i),inv=P*n;
  $("sip-out").textContent=inr(fv);$("sip-inv").textContent=inr(inv);$("sip-gain").textContent=inr(fv-inv);
  $("sip-bar").style.width=(fv>0?inv/fv*100:0)+"%";}
function calcFD(){const P=num("fd-p"),r=num("fd-r")/100,t=num("fd-n");const A=P*Math.pow(1+r/4,4*t);
  $("fd-out").textContent=inr(A);$("fd-int").textContent=inr(A-P);$("fd-yield").textContent=((Math.pow(1+r/4,4)-1)*100).toFixed(2)+"%";}
function calcCmp(){const P=num("cmp-p");const res=["a","b"].map(k=>{const n=num(k+"-n"),e=emi(P,num(k+"-r"),n),cost=e*Math.round(n*12)-P+num(k+"-f");
  $(k+"-emi").textContent=inr(e);$(k+"-tot").textContent=inr(cost);return cost});
  const d=res[0]-res[1],v=$("cmp-verdict");
  if(Math.abs(d)<1)v.innerHTML=`<div class="status ok">Both offers cost the same overall.</div>`;
  else v.innerHTML=`<div class="status ok">Offer ${d>0?"B":"A"} is cheaper by ${inr(Math.abs(d))} over the full tenure.</div>`;}

/* ---------- LC dates ---------- */
const parseD=s=>{if(!s)return null;const[y,m,d]=s.split("-").map(Number);return y?new Date(y,m-1,d):null};
const isoD=d=>d.getFullYear()+"-"+String(d.getMonth()+1).padStart(2,"0")+"-"+String(d.getDate()).padStart(2,"0");
const fmtD=d=>d?d.toLocaleDateString("en-IN",{weekday:"short",day:"numeric",month:"short",year:"numeric"}):"–";
const addDays=(d,n)=>{const x=new Date(d);x.setDate(x.getDate()+n);return x};
function closed(d,rule,hol){const w=d.getDay();if(w===0)return true;
  if(w===6){if(rule==="satsun")return true;if(rule==="india"){const k=Math.ceil(d.getDate()/7);if(k===2||k===4)return true}}
  return hol.has(isoD(d));}
function calcLC(){
  const ship=parseD($("lc-ship").value),exp=parseD($("lc-exp").value),pres=parseD($("lc-pres").value),per=Math.max(0,Math.round(num("lc-per")));
  const rule=$("lc-wk").value,hol=new Set($("lc-hol").value.split(/[\s,]+/).filter(Boolean));
  const st=$("lc-status");
  const lsd=parseD($("lc-lsd").value);
  if(!ship||!exp){$("lc-last").textContent="–";st.innerHTML=`<div class="status warn">Enter the shipment and expiry dates.</div>`;$("lc-tline").innerHTML="";return}
  const stop=m=>{$("lc-last").textContent="–";["lc-raw","lc-which","lc-exam"].forEach(i=>$(i).textContent="–");st.innerHTML=`<div class="status warn">${m}</div>`;$("lc-tline").innerHTML="";};
  if(exp<ship){stop("The expiry date is before the shipment date. Check the dates.");return}
  if(!per){stop("Enter a presentation period in days (21 if the LC is silent).");return}
  const raw=addDays(ship,per);const usingExp=exp<raw;let last=usingExp?exp:raw;
  let ext=last;while(closed(ext,rule,hol))ext=addDays(ext,1);
  $("lc-raw").textContent=fmtD(raw);
  $("lc-which").textContent=usingExp?"LC expiry comes first":"Presentation period comes first";
  $("lc-last").textContent=fmtD(ext);
  let msgs=[];
  if(lsd&&lsd>exp)msgs.push(`<div class="status warn">The latest shipment date is after the expiry date. Check the LC: shipping that late would leave no time to present documents.</div>`);
  if(lsd){
    if(ship>lsd)msgs.push(`<div class="status bad">Late shipment: shipped on ${fmtD(ship)}, after the latest shipment date of ${fmtD(lsd)}. The latest shipment date is never extended for a holiday (Art. 29c).</div>`);
    else msgs.push(`<div class="status ok">Shipment is within the latest shipment date (field 44C).</div>`);
  }
  if(ext.getTime()!==last.getTime())msgs.push(`<div class="status warn">${fmtD(last)} is not a banking day, so the last day moves to ${fmtD(ext)} (Art. 29a).</div>`);
  if(pres){
    let d=pres,c=0;while(c<5){d=addDays(d,1);if(!closed(d,rule,hol))c++}
    $("lc-exam").textContent=fmtD(d);
    if(pres<ship)msgs.push(`<div class="status bad">Presentation date is before shipment. Check the dates.</div>`);
    else if(pres>ext)msgs.push(`<div class="status bad">Late presentation: documents presented after ${fmtD(ext)}.</div>`);
    else msgs.push(`<div class="status ok">Presented in time. Bank must decide by ${fmtD(d)}.</div>`);
  } else $("lc-exam").textContent="Add a presentation date";
  st.innerHTML=msgs.join("");
  // timeline
  const ev=[];
  if(lsd)ev.push([lsd,"Latest shipment date","Field 44C. Not extended for holidays.","base"]);
  ev.push([ship,"Shipment","On-board or dispatch date on the transport document.",lsd&&ship>lsd?"bad":"base"]);
  if(pres)ev.push([pres,"Documents presented","",pres>ext||pres<ship?"bad":"ok"]);
  ev.push([ext,"Last day to present",usingExp?"Set by the LC expiry date.":`${per} days after shipment.`+(ext.getTime()!==last.getTime()?" Moved for a bank holiday.":""),"key"]);
  if(!usingExp)ev.push([exp,"LC expiry","Field 31D.","base"]);
  if(pres&&!(pres>ext||pres<ship)){let d=pres,c=0;while(c<5){d=addDays(d,1);if(!closed(d,rule,hol))c++}ev.push([d,"Examination deadline","Bank must honour or refuse by the end of this day.","key"])}
  ev.sort((a,b)=>a[0]-b[0]);
  $("lc-tline").innerHTML=ev.map(e=>`<li class="tl-${e[3]}"><span class="tl-date">${fmtD(e[0])}</span><b>${e[1]}</b>${e[2]?`<span class="muted">${e[2]}</span>`:""}</li>`).join("");
}

let _rz;window.addEventListener("resize",()=>{clearTimeout(_rz);_rz=setTimeout(()=>{if(window._emiYrs)drawEMIChart(window._emiYrs)},150)});
/* ---------- usance maturity ---------- */
function calcUsance(){
  const d0=parseD($("us-date").value),n=Math.max(0,Math.round(num("us-days")));
  const rule=$("us-wk").value,hol=new Set($("us-hol").value.split(/[\s,]+/).filter(Boolean)),st=$("us-status");
  document.querySelectorAll("#us-presets .chip").forEach(b=>b.setAttribute("aria-pressed",+b.dataset.days===n));
  if(!d0||!n){$("us-out").textContent="–";st.innerHTML=`<div class="status warn">Enter a start date and tenor.</div>`;return}
  const mat=addDays(d0,n);let due=mat;while(closed(due,rule,hol))due=addDays(due,1);
  $("us-mat").textContent=fmtD(mat);$("us-out").textContent=fmtD(due);
  $("us-from").textContent=$("us-base").value+", "+fmtD(d0);
  $("us-ten").textContent=n+" days";
  st.innerHTML=due.getTime()!==mat.getTime()
    ?`<div class="status warn">${fmtD(mat)} is not a banking day, so payment is due on the next banking day, ${fmtD(due)}.</div>`
    :`<div class="status ok">Maturity falls on a banking day.</div>`;
}
$("us-presets").addEventListener("click",e=>{const b=e.target.closest("[data-days]");if(!b)return;$("us-days").value=b.dataset.days;calcUsance();});

/* ---------- wire up ---------- */
/* money inputs and sliders */
document.querySelectorAll("input.money").forEach(el=>{setMoney(el);el.addEventListener("input",()=>setMoney(el),true)});
document.querySelectorAll("input[data-range]").forEach(el=>{
  const [mn,mx,stp]=el.dataset.range.split("|").map(Number);
  const r=document.createElement("input");r.type="range";r.className="slider";r.id=el.id+"-s";r.min=mn;r.max=mx;r.step=stp;
  r.setAttribute("aria-label",(el.labels&&el.labels[0]?el.labels[0].textContent:"Value")+" slider");
  const sync=()=>{const v=num(el.id);r.value=Math.min(mx,Math.max(mn,v));r.style.setProperty("--p",((r.value-mn)/(mx-mn)*100)+"%")};
  (el.nextElementSibling&&el.nextElementSibling.classList.contains("words")?el.nextElementSibling:el).after(r);
  r.addEventListener("input",()=>{el.value=el.classList.contains("money")?fmtIN(+r.value):r.value;if(el.classList.contains("money"))setMoney(el);r.style.setProperty("--p",((r.value-mn)/(mx-mn)*100)+"%");el.dispatchEvent(new Event("input",{bubbles:true}))});
  el.addEventListener("input",sync);sync();
});
const binds={"us":calcUsance,"emi":calcEMI,"el":calcElig,"pp":calcPrepay,"sip":calcSIP,"fd":calcFD,"lc":calcLC,"a":calcCmp,"b":calcCmp,"cmp":calcCmp};
document.querySelectorAll(".panel input,.panel select,.panel textarea").forEach(el=>{
  if(el.classList.contains("slider"))return;
  const fn=binds[el.id.split("-")[0]];if(fn){el.addEventListener("input",fn);el.addEventListener("change",fn)}
});
[calcEMI,calcElig,calcPrepay,calcSIP,calcFD,calcLC,calcCmp,calcUsance].forEach(f=>f());

/* ---------- contact form (Web3Forms) ---------- */
$("contact-form").addEventListener("submit",async e=>{
  e.preventDefault();
  const f=e.target,note=$("c-note");note.hidden=false;
  if(!f.name.value.trim()||!/^\S+@\S+\.\S+$/.test(f.email.value)||!f.message.value.trim()){
    note.textContent="Please fill in your name, a valid email and a message.";return}
  const key=f.access_key.value;
  const live=/(^|\.)mukulchopra\.in$|github\.io$|^localhost$|^127\./.test(location.hostname);
  if(!live){note.textContent="This is a preview. The form sends messages from the live site at mukulchopra.in.";return}
  if(!key||key.startsWith("YOUR_")){note.textContent="Preview only: messages will start arriving once the Web3Forms access key is added.";return}
  note.textContent="Sending…";
  try{
    const r=await fetch("https://api.web3forms.com/submit",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(Object.fromEntries(new FormData(f)))});
    const j=await r.json();
    if(j.success){note.textContent="Thanks! Your message has been sent.";f.reset()}
    else note.textContent="The message could not be sent. Please try again in a moment.";
  }catch(_){note.textContent="The message could not be sent. Check your connection and try again."}
});

/* ---------- site search ---------- */
const curPage=()=>document.documentElement.dataset.page||((document.querySelector("section.page:not([hidden])")||{}).id||"page-home").slice(5);
function flash(el){el.classList.remove("srch-flash");void el.offsetWidth;el.classList.add("srch-flash");setTimeout(()=>el.classList.remove("srch-flash"),2100);}
function openRuleArt(pre,n){
  const tb=document.querySelector(`[data-tabs="${pre}"] [data-tab="arts"]`);if(tb)tb.click();
  const q=$(pre+"-art-q");if(q.value){q.value="";q.dispatchEvent(new Event("input"));}
  const d=document.querySelector(`#${pre}-arts details[data-artno="${n}"]`);
  if(d){d.open=true;setTimeout(()=>{try{d.scrollIntoView({block:"center"})}catch(_){};flash(d)},120);}
}
function findOnPage(page,text){
  const sec=$("page-"+page);if(!sec.querySelectorAll)return;
  const t=text.trim().toLowerCase();
  const el=[...sec.querySelectorAll("dt,h3,td.term,.mt-tag")].find(e=>((e.firstChild&&e.firstChild.textContent)||"").trim().toLowerCase()===t);
  if(!el)return;
  const panel=el.closest("[data-tabpanel]");
  if(panel&&panel.hidden){const [bar,tab]=panel.dataset.tabpanel.split(":");const b=document.querySelector(`[data-tabs="${bar}"] [data-tab="${tab}"]`);if(b)b.click();}
  const box=el.closest(".pt,.case,.mt-row,.disc-row,tr,dl>div")||el;
  setTimeout(()=>{try{box.scrollIntoView({block:"center"})}catch(_){};flash(box)},120);
}
function applyHash(h){
  h=decodeURIComponent((h||"").replace(/^#/,""));
  const page=curPage();let m;
  if((m=/^art-(\d{1,2})$/.exec(h))){
    if(page==="ucp-600")openArticle(m[1]);else if(page==="urc-522")openRuleArt("urc",m[1]);else if(page==="urdg-758")openRuleArt("urdg",m[1]);
  }else if(h.startsWith("find-"))findOnPage(page,h.slice(5));
  else if((m=/^lc-(\d{4}-\d{2}-\d{2})?_(\d{4}-\d{2}-\d{2})_(\d{1,3})$/.exec(h))&&page==="tool-lc"){
    $("lc-lsd").value=m[1]||"";$("lc-ship").value=m[1]||isoD(new Date());$("lc-exp").value=m[2];$("lc-per").value=m[3];$("lc-pres").value="";
    calcLC();const r=$("lc-last");if(r.scrollIntoView)setTimeout(()=>{try{r.closest(".panel").scrollIntoView({block:"start"})}catch(_){};flash(r.closest(".panel"))},120);
  }
}
window.addEventListener("hashchange",()=>applyHash(location.hash));
const SX=[];
const sxAdd=(g,t,b,r,h,extra)=>SX.push(Object.assign({g,t,b,r,h:h||"",x:(g+" "+t+" "+b).toLowerCase(),tl:t.toLowerCase()},extra||{}));
Object.keys(PAGE_META).filter(p=>p!=="home").forEach(p=>sxAdd(p.startsWith("blog")?"Blog":"Pages and tools",PAGE_META[p][0],PAGE_META[p][1],p,"",{k:p.startsWith("tool")?"calculator":p==="lc-decoder"?"mt700 mt707 mt701 swift letter of credit amendment decode checker tool":p.startsWith("blog-")?"blog post article":""}));
UCP.forEach(a=>sxAdd("UCP 600","Art. "+a[0]+" · "+a[1],a[3],"ucp-600","#art-"+a[0],{n:a[0],set:"ucp"}));
MT.forEach(m=>sxAdd("MT700 fields","Field "+m[0]+" · "+m[1],m[2],"ucp-600","#find-"+m[0]));
DISC.forEach(d=>sxAdd("Common discrepancies",d[0],d[1],"ucp-600","#find-"+d[0]));
ISBP.forEach(p=>sxAdd("ISBP 821",p[1],p[2],"isbp-821","#find-"+p[1]));
URC_ARTS.forEach(a=>sxAdd("URC 522","Art. "+a[0]+" · "+a[1],a[3],"urc-522","#art-"+a[0],{n:a[0],set:"urc"}));
URDG_ARTS.forEach(a=>sxAdd("URDG 758","Art. "+a[0]+" · "+a[1],a[3],"urdg-758","#art-"+a[0],{n:a[0],set:"urdg"}));
URR.concat(URR_EXTRA).forEach(p=>sxAdd("URR 725",p[1],p[0]+". "+p[2],"urr-725","#find-"+p[1]));
ISP.forEach(p=>sxAdd("ISP98",p[0]+" · "+p[1],p[2],"isp98","#find-"+p[1]));
EUCP.forEach(p=>sxAdd("eUCP 2.1",p[1],p[0]+". "+p[2],"eucp","#find-"+p[1]));
INCO.forEach(r=>sxAdd("Incoterms 2020",r[0]+" · "+r[1],r[3]+". "+(INCO_DOCS[r[0]]||""),"incoterms","#find-"+r[0]));
GLOSS.concat(GLOSS_EXTRA).forEach(g=>sxAdd("Glossary",g[0],g[1],"glossary","#find-"+g[0]));
CASES.forEach(c=>sxAdd("Case studies",c[0],c[1],"case-studies","#find-"+c[0]));
SX.forEach(e=>{if(e.k)e.x+=" "+e.k});
const SX_GROUPS=[...new Set(SX.map(e=>e.g))];
const srch=$("srch"),sq=$("srch-q"),sres=$("srch-res"),sbtn=$("srch-btn");
const SUGG=["Art. 14","Refusal notice","CIF","Presentation period","Demand guarantee","D/P","EMI calculator","Bill of lading"];
const reEsc=s=>s.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");
function hl(text,toks){let h=esc(text);if(!toks.length)return h;const re=new RegExp("("+toks.map(t=>reEsc(esc(t))).join("|")+")","gi");return h.replace(re,"<mark>$1</mark>");}
function snip(b,toks){const lb=b.toLowerCase();let i=-1;for(const t of toks){const j=lb.indexOf(t);if(j>=0&&(i<0||j<i))i=j;}
  if(i<60)return b.length>150?b.slice(0,150)+"…":b;const st=b.lastIndexOf(" ",i-40)+1;const out=b.slice(st,st+150);return "…"+out+(st+150<b.length?"…":"");}
let sHits=[],sOn=-1;
function srchRun(){
  const raw=sq.value.trim(),q=raw.toLowerCase();
  if(!q){sHits=[];sOn=-1;sres.innerHTML=`<p class="srch-empty">Search every guide, article, Incoterm, glossary term and calculator. Try:</p><div class="srch-sug">${SUGG.map(s=>`<button type="button" data-sug="${esc(s)}">${esc(s)}</button>`).join("")}</div>`;return;}
  let hits=[],toks=[];
  const m=/^(ucp|urc|urdg)?\s*(?:600|522|758)?\s*(?:art(?:icle)?s?\.?\s*)?(\d{1,2})$/.exec(q);
  if(m){hits=SX.filter(e=>e.n===String(+m[2])&&(!m[1]||e.set===m[1])).map(e=>({e,s:0}));}
  if(!hits.length){
    toks=q.replace(/[^\w%/&.-]+/g," ").split(/\s+/).filter(Boolean);
    hits=SX.filter(e=>toks.every(t=>e.x.includes(t))).map(e=>({e,s:e.tl.includes(q)?0:toks.every(t=>e.tl.includes(t))?1:2}));
  }
  if(!hits.length){sHits=[];sOn=-1;sres.innerHTML=`<p class="srch-empty">Nothing matches "${esc(raw)}". Try a shorter word, an article number such as "14", or an Incoterm such as "FOB".</p>`;return;}
  const groups=SX_GROUPS.map(g=>{const hs=hits.filter(h=>h.e.g===g).sort((a,b)=>a.s-b.s);return {g,hs,best:hs.length?hs[0].s:9};}).filter(x=>x.hs.length).sort((a,b)=>a.best-b.best);
  sHits=[];let html="";
  groups.forEach(x=>{
    const show=x.hs.slice(0,6);
    html+=`<div class="srch-g">${esc(x.g)}${x.hs.length>6?`<span>${x.hs.length} matches, showing 6</span>`:""}</div>`;
    show.forEach(({e})=>{const i=sHits.length;sHits.push(e);
      const href=(e.r==="home"?"/":"/"+e.r)+e.h;
      html+=`<a class="srch-hit" id="sh-${i}" data-i="${i}" href="${href}"><b>${hl(e.t,toks)}</b><span>${hl(snip(e.b,toks),toks)}</span></a>`;});
  });
  sres.innerHTML=html;sOn=-1;setOn(0);
}
function setOn(i){if(!sHits.length)return;sOn=(i+sHits.length)%sHits.length;sres.querySelectorAll(".srch-hit").forEach(a=>a.classList.toggle("on",+a.dataset.i===sOn));const a=$("sh-"+sOn);if(a.scrollIntoView)try{a.scrollIntoView({block:"nearest"})}catch(_){}}
function srchOpen(){if(!srch.hidden)return;setMenu(false);srch.hidden=false;document.documentElement.style.overflow="hidden";srchRun();setTimeout(()=>{try{sq.focus();sq.select()}catch(_){}},10);}
function srchClose(back){srch.hidden=true;document.documentElement.style.overflow="";if(back!==false)try{sbtn.focus()}catch(_){}}
function srchGo(e,ev){
  const live=!!document.documentElement.dataset.page;
  if(live&&e.r!==curPage())return;            /* let the browser follow the link */
  if(ev)ev.preventDefault();
  srchClose(false);
  if(!live){show(e.r);try{history.replaceState(null,"","#"+e.r)}catch(_){}}
  else if(e.h){try{history.replaceState(null,"",e.h)}catch(_){}}
  if(e.h)setTimeout(()=>applyHash(e.h),live?0:80);else if(live)toTop(e.r);
}
sbtn.addEventListener("click",srchOpen);
$("srch-close").addEventListener("click",()=>srchClose());
srch.addEventListener("click",e=>{if(e.target===srch)srchClose();});
sq.addEventListener("input",srchRun);
sres.addEventListener("click",e=>{
  const s=e.target.closest("[data-sug]");if(s){sq.value=s.dataset.sug;srchRun();sq.focus();return;}
  const a=e.target.closest(".srch-hit");if(!a)return;e.stopPropagation();srchGo(sHits[+a.dataset.i],e);
},true);
sq.addEventListener("keydown",e=>{
  if(e.key==="ArrowDown"){e.preventDefault();setOn(sOn+1);}
  else if(e.key==="ArrowUp"){e.preventDefault();setOn(sOn-1);}
  else if(e.key==="Enter"&&sHits.length){e.preventDefault();const h=sHits[Math.max(0,sOn)];const live=!!document.documentElement.dataset.page;
    if(live&&h.r!==curPage()){location.href=(h.r==="home"?"/":"/"+h.r)+h.h;}else srchGo(h,null);}
});
document.addEventListener("keydown",e=>{
  if(e.key==="Escape"&&!srch.hidden){e.preventDefault();srchClose();return;}
  const tg=e.target,typing=tg&&(tg.isContentEditable||/^(INPUT|TEXTAREA|SELECT)$/.test(tg.tagName));
  if((e.key==="/"&&!typing&&!e.ctrlKey&&!e.metaKey&&!e.altKey)||((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==="k")){e.preventDefault();srchOpen();}
});

/* ---------- LC decoder (MT700 / MT701 / MT707) ---------- */
const DEC_NAMES={
 "27":"Sequence of total","40A":"Form of documentary credit","20":"Documentary credit number","21":"Receiver's reference","23":"Reference / issuing bank's reference",
 "31C":"Date of issue","40E":"Applicable rules","31D":"Date and place of expiry","51A":"Applicant bank","51D":"Applicant bank","50":"Applicant","59":"Beneficiary","59A":"Beneficiary",
 "32B":"Currency code, amount","39A":"Percentage credit amount tolerance","39C":"Additional amounts covered","41A":"Available with … by …","41D":"Available with … by …",
 "42C":"Drafts at","42A":"Drawee","42D":"Drawee","42M":"Mixed payment details","42P":"Negotiation / deferred payment details","43P":"Partial shipments","43T":"Transhipment",
 "44A":"Place of taking in charge / dispatch / receipt","44E":"Port of loading / airport of departure","44F":"Port of discharge / airport of destination","44B":"Place of final destination / delivery",
 "44C":"Latest date of shipment","44D":"Shipment period","45A":"Description of goods and/or services","46A":"Documents required","47A":"Additional conditions",
 "49G":"Special payment conditions for beneficiary","49H":"Special payment conditions for bank only","71D":"Charges","48":"Period for presentation in days","49":"Confirmation instructions",
 "58A":"Requested confirmation party","58D":"Requested confirmation party","53A":"Reimbursing bank","53D":"Reimbursing bank","78":"Instructions to the paying / accepting / negotiating bank",
 "57A":"'Advise through' bank","57B":"'Advise through' bank","57D":"'Advise through' bank","72Z":"Sender to receiver information","72":"Sender to receiver information",
 "52A":"Issuing bank","52D":"Issuing bank","50B":"Non-bank issuer","26E":"Number of amendment","30":"Date of amendment","22A":"Purpose of message","23S":"Cancellation request",
 "33B":"Decrease of documentary credit amount","45B":"Description of goods (amended)","46B":"Documents required (amended)","47B":"Additional conditions (amended)",
 "49M":"Special payment conditions for beneficiary (amended)","49N":"Special payment conditions for bank only (amended)","71N":"Amendment charge payable by","79":"Narrative (amendment details)"
};
const DEC_TAGS=new Set(Object.keys(DEC_NAMES));
const DEC_707=new Set(["26E","30","22A","23S","33B","45B","46B","47B","49M","49N","71N","79","52A","52D"]);
const MT_GUIDE=new Set(MT.map(m=>m[0]));
const DMON={JAN:0,FEB:1,MAR:2,APR:3,MAY:4,JUN:5,JUL:6,AUG:7,SEP:8,OCT:9,NOV:10,DEC:11};
const DCOUNTRY=[
 ["INDIA",["INDIA","MUMBAI","BOMBAY","NEW DELHI","DELHI","CHENNAI","MADRAS","KOLKATA","CALCUTTA","BENGALURU","BANGALORE","HYDERABAD","AHMEDABAD","PUNE","SURAT","LUDHIANA","TIRUPUR","TIRUPPUR","COIMBATORE","JAIPUR","MEERUT","KANPUR","NOIDA","GURUGRAM","GURGAON","KOCHI","COCHIN","VISAKHAPATNAM","MUNDRA","NHAVA SHEVA","JNPT","KANDLA","MORADABAD","PANIPAT","JALANDHAR","AGRA","VARANASI","INDORE","NAGPUR","VADODARA","RAJKOT","TUTICORIN","PIPAVAV","HAZIRA"]],
 ["UAE",["UAE","U.A.E","UNITED ARAB EMIRATES","DUBAI","ABU DHABI","SHARJAH","AJMAN","JEBEL ALI","RAS AL KHAIMAH","FUJAIRAH"]],
 ["SAUDI ARABIA",["SAUDI ARABIA","KSA","RIYADH","JEDDAH","DAMMAM"]],["OMAN",["OMAN","MUSCAT","SOHAR","SALALAH"]],["QATAR",["QATAR","DOHA","HAMAD PORT"]],["KUWAIT",["KUWAIT"]],["BAHRAIN",["BAHRAIN","MANAMA"]],
 ["BANGLADESH",["BANGLADESH","DHAKA","CHITTAGONG","CHATTOGRAM"]],["SRI LANKA",["SRI LANKA","COLOMBO"]],["NEPAL",["NEPAL","KATHMANDU","BIRGUNJ"]],
 ["CHINA",["CHINA","SHANGHAI","BEIJING","SHENZHEN","GUANGZHOU","NINGBO","QINGDAO"]],["HONG KONG",["HONG KONG"]],["SINGAPORE",["SINGAPORE"]],["MALAYSIA",["MALAYSIA","KUALA LUMPUR","PORT KLANG","PENANG"]],
 ["INDONESIA",["INDONESIA","JAKARTA","SURABAYA"]],["VIETNAM",["VIETNAM","VIET NAM","HO CHI MINH","HANOI","HAIPHONG"]],["THAILAND",["THAILAND","BANGKOK","LAEM CHABANG"]],
 ["JAPAN",["JAPAN","TOKYO","OSAKA","YOKOHAMA"]],["SOUTH KOREA",["KOREA","SEOUL","BUSAN"]],["UK",["UNITED KINGDOM","U.K.","LONDON","FELIXSTOWE","SOUTHAMPTON","ENGLAND"]],
 ["USA",["UNITED STATES","U.S.A","USA","NEW YORK","LOS ANGELES","HOUSTON","NEW JERSEY"]],["CANADA",["CANADA","TORONTO","VANCOUVER","MONTREAL"]],
 ["GERMANY",["GERMANY","HAMBURG","FRANKFURT","BREMEN","BREMERHAVEN"]],["NETHERLANDS",["NETHERLANDS","ROTTERDAM","AMSTERDAM"]],["BELGIUM",["BELGIUM","ANTWERP"]],
 ["FRANCE",["FRANCE","PARIS","LE HAVRE","MARSEILLE"]],["ITALY",["ITALY","MILAN","GENOA","NAPLES"]],["SPAIN",["SPAIN","MADRID","BARCELONA","VALENCIA"]],
 ["TURKIYE",["TURKEY","TURKIYE","ISTANBUL","MERSIN","IZMIR"]],["EGYPT",["EGYPT","CAIRO","ALEXANDRIA","PORT SAID"]],["KENYA",["KENYA","NAIROBI","MOMBASA"]],
 ["NIGERIA",["NIGERIA","LAGOS","APAPA"]],["SOUTH AFRICA",["SOUTH AFRICA","JOHANNESBURG","DURBAN","CAPE TOWN"]],["TANZANIA",["TANZANIA","DAR ES SALAAM"]],
 ["RUSSIA",["RUSSIA","MOSCOW","ST PETERSBURG","NOVOROSSIYSK"]],["AUSTRALIA",["AUSTRALIA","SYDNEY","MELBOURNE"]],["BRAZIL",["BRAZIL","SANTOS","SAO PAULO"]],["MEXICO",["MEXICO"]],
 ["IRAN",["IRAN","BANDAR ABBAS","TEHRAN"]],["IRAQ",["IRAQ","BAGHDAD","UMM QASR","BASRA"]],["JORDAN",["JORDAN","AMMAN","AQABA"]],["PAKISTAN",["PAKISTAN","KARACHI","LAHORE"]]
];
function decCountry(t){
  t=" "+String(t||"").toUpperCase().replace(/[^A-Z.]+/g," ")+" ";
  let best=null,bi=-1;
  DCOUNTRY.forEach(([c,keys])=>keys.forEach(k=>{const i=t.lastIndexOf(" "+k+" ");if(i>bi){bi=i;best=c}}));
  return best;
}
function decDate(s){
  s=String(s||"").toUpperCase();let m;
  if((m=/(\d{4})-(\d{2})-(\d{2})/.exec(s)))return {d:new Date(+m[1],m[2]-1,+m[3]),rest:s.replace(m[0],"").trim()};
  if((m=/(\d{1,2})[\/.](\d{1,2})[\/.](\d{4})/.exec(s)))return {d:new Date(+m[3],m[2]-1,+m[1]),rest:s.replace(m[0],"").trim()};
  if((m=/(\d{1,2})[\s-]*(JAN|FEB|MAR|APR|MAY|JUN|JUL|AUG|SEP|OCT|NOV|DEC)[A-Z]*[\s,-]*(\d{4}|\d{2})\b/.exec(s))){const y=+m[3]<100?2000+ +m[3]:+m[3];return {d:new Date(y,DMON[m[2]],+m[1]),rest:s.replace(m[0],"").trim()};}
  if((m=/^\s*(\d{2})(\d{2})(\d{2})/.exec(s))&&+m[2]>=1&&+m[2]<=12&&+m[3]>=1&&+m[3]<=31)return {d:new Date(2000+ +m[1],m[2]-1,+m[3]),rest:s.slice(m.index+m[0].length).trim()};
  return null;
}
function decAmt(s){
  const m=/([A-Z]{3})\s*([\d.,'\s]*\d[\d.,]*)/.exec(String(s||"").toUpperCase());if(!m)return null;
  let n=m[2].replace(/[\s']/g,"");const lc=n.lastIndexOf(","),ld=n.lastIndexOf(".");
  if(lc>=0&&ld>=0){n=lc>ld?n.replace(/\./g,"").replace(",","."):n.replace(/,/g,"")}
  else if(lc>=0){n=(n.length-lc-1<=2)?n.replace(/,(?=\d{0,2}$)/,".").replace(/,/g,""):n.replace(/,/g,"")}
  const v=parseFloat(n);return isNaN(v)?null:{ccy:m[1],v};
}
const decFmtAmt=a=>a?a.ccy+" "+a.v.toLocaleString(a.ccy==="INR"?"en-IN":"en-US",{minimumFractionDigits:2,maximumFractionDigits:2}):"–";
const dayDiff=(a,b)=>Math.round((b-a)/864e5);
const today0=()=>{const t=new Date();return new Date(t.getFullYear(),t.getMonth(),t.getDate())};
const decName=(tag,type)=>type==="707"&&tag==="32B"?"Increase of documentary credit amount":(DEC_NAMES[tag]||"Field "+tag);
const decWords=s=>String(s).toLowerCase().match(/[a-z]{3,}/g)||[];

function decParse(raw){
  let t=String(raw||"").replace(/\r/g,"");
  let type=null;
  const hb=/\{2:[IO](\d{3})/.exec(t);if(hb)type=hb[1];
  if(!type){const mm=/\bMT\s?-?(700|701|707)\b/i.exec(t);if(mm)type=mm[1];}
  const b4=/\{4:\s*\n?([\s\S]*?)\n?-\}/.exec(t);if(b4)t=b4[1];
  t=t.replace(/\{[1235]:[^{}]*(\{[^{}]*\}[^{}]*)*\}/g,"");
  const lines=t.split("\n");const fields=[];let cur=null;
  for(const ln of lines){
    const m=/^\s*(?:F|:)?\s*(\d{2}[A-Z]?)\s*:\s?(.*)$/.exec(ln);
    if(m&&DEC_TAGS.has(m[1].toUpperCase())){
      const tag=m[1].toUpperCase();let first=m[2]||"";
      // printout labels: "31D: Date and Place of Expiry" or "Date and Place of Expiry: 261215 INDIA"
      const nameW=decWords(DEC_NAMES[tag]).concat(["doc","documentary","credit","date","place"]);
      const colon=first.lastIndexOf(":");
      const tryLabel=s=>{const w=decWords(s);if(!w.length||/\d/.test(s))return false;const hit=w.filter(x=>nameW.includes(x)).length;return hit>=Math.max(1,Math.ceil(w.length*0.5));};
      if(colon>0&&tryLabel(first.slice(0,colon)))first=first.slice(colon+1);
      else if(tryLabel(first.replace(/[:.\-–]+\s*$/,"")))first="";
      cur={tag,lines:[first.trim()]};fields.push(cur);
    }else if(cur){cur.lines.push(ln.trim())}
  }
  const F={},order=[];
  fields.forEach(f=>{const v=f.lines.join("\n").replace(/\n{3,}/g,"\n\n").trim();
    if(f.tag in F){if(f.tag!=="27"&&f.tag!=="20")F[f.tag]+="\n"+v}else{F[f.tag]=v;order.push(f.tag)}});
  if(!type||type==="701"){type=order.some(k=>DEC_707.has(k))?"707":(order.length?"700":null)}
  if(type!=="707")type="700";
  return {type,F,order,merged:fields.filter(f=>["45A","46A","47A"].includes(f.tag)).length>new Set(fields.filter(f=>["45A","46A","47A"].includes(f.tag)).map(f=>f.tag)).size};
}
const decGet=(F,...tags)=>{for(const t of tags)if(F[t]!=null&&F[t]!=="")return F[t];return ""};
function decItems(text){
  if(!text)return [];
  const out=[];let cur="";
  String(text).split("\n").forEach(l=>{
    const m=/^\s*(?:\+|\d{1,2}\s*[.)]|\(\d{1,2}\)|[A-Z]\)|-\s)\s*(.*)$/.exec(l);
    if(m){if(cur.trim())out.push(cur.trim());cur=m[1]}else cur+=(cur?" ":"")+l.trim();
  });
  if(cur.trim())out.push(cur.trim());
  return out.length?out:[String(text).trim()];
}
function decIncoterm(F){
  const src=[F["45A"],F["45B"],F["47A"],F["46A"]].filter(Boolean).join("\n").toUpperCase();
  const m=/\b(EXW|FCA|FAS|FOB|CFR|CNF|C\s?&\s?F|CIF|CPT|CIP|DAP|DPU|DDP|DAT)\b[ ,]*([A-Z][A-Z ,.'-]{0,38})?/.exec(src);
  if(!m)return null;
  let term=m[1].replace(/\s/g,"");if(term==="CNF"||term==="C&F")term="CFR";
  let place=(m[2]||"").replace(/\b(INCOTERMS?|AS PER|PORT|BASIS)\b.*$/,"").replace(/[ ,.-]+$/,"").trim();
  const v=/INCOTERMS?\s*(\d{4})/.exec(src);
  return {term,place,ver:v?v[1]:null,raw:m[0].trim()};
}
const DOC_TYPES=[
 ["invoice",/COMMERCIAL INVOICE|\bINVOICE\b/,"Commercial invoice","18"],
 ["cpbl",/CHARTER\s*PARTY/,"Charter party bill of lading","22"],
 ["mm",/MULTIMODAL|COMBINED TRANSPORT/,"Multimodal transport document","19"],
 ["swb",/SEA\s*WAYBILL|NON.?NEGOTIABLE SEA/,"Sea waybill","21"],
 ["bl",/BILLS? OF LADING|\bB\s?\/\s?L\b/,"Bill of lading","20"],
 ["awb",/AIR\s*WAY\s*BILL|\bAWB\b|AIR CONSIGNMENT/,"Air waybill","23"],
 ["road",/\bROAD\b|\bRAIL\b|\bCMR\b|LORRY|TRUCK|RAILWAY RECEIPT/,"Road or rail transport document","24"],
 ["ins",/INSURANCE/,"Insurance document","28"],
 ["pl",/PACKING LIST/,"Packing list",""],
 ["coo",/CERTIFICATE OF ORIGIN|ORIGIN CERTIFICATE|\bGSP\b|FORM A\b/,"Certificate of origin",""],
 ["insp",/INSPECTION|SURVEY/,"Inspection certificate",""],
 ["phyto",/PHYTO/,"Phytosanitary certificate",""],["fum",/FUMIGATION/,"Fumigation certificate",""],
 ["health",/HEALTH|SANITARY|VETERINARY/,"Health certificate",""],["qual",/ANALYSIS|QUALITY|TEST REPORT/,"Quality or analysis certificate",""],
 ["wt",/WEIGHT/,"Weight list or certificate",""],
 ["benc",/BENEFICIARY'?S?\s*(CERTIFICATE|STATEMENT|DECLARATION)|WE (HEREBY )?CERTIFY|CERTIFYING THAT/,"Beneficiary's certificate",""],
 ["adv",/SHIPMENT ADVICE|SHIPPING ADVICE|ADVICE OF SHIPMENT/,"Shipment advice",""],
 ["courier",/COURIER|POST RECEIPT|POSTING/,"Courier or post receipt","25"],
 ["draft",/\bDRAFTS?\b|BILL OF EXCHANGE/,"Draft",""]
];
const A_=(n,s)=>"Art. "+artBtn(n)+(s||"");
const DOC_CHECKS={
 invoice:()=>[`Issued by you, made out to the applicant, in the credit currency (${A_(18,"(a)")})`,`Goods description corresponds with field 45A (${A_(18,"(c)")})`,`Amount within the credit, including any tolerance (${A_(18,"(b)")}, ${A_(30)})`,"Shows the Incoterm, LC number and any other details the credit asks for"],
 bl:()=>[`Dated on-board notation, unless it is a pre-printed "shipped on board" bill (${A_(20,"(a)(ii)")})`,"Ports of loading and discharge as in 44E and 44F",`Consignee, notify party and freight marking exactly as the credit says`,`Full set of originals, and no clause declaring the goods or packaging defective (${A_(27)})`,`Signed by the carrier, master or a named agent (${A_(20,"(a)(i)")})`],
 cpbl:()=>[`Signed by the master, owner, charterer or a named agent (${A_(22)})`,"Shows shipment on board a named vessel at the port in 44E","Banks do not examine the charter party contract itself"],
 mm:()=>[`Shows dispatch, taking in charge or shipment at the place in 44A or 44E, and the date (${A_(19)})`,"Final destination as in 44B or 44F","Consignee, notify party and freight marking as required; full set of originals"],
 swb:()=>[`Same checks as a bill of lading (${A_(21)})`,"Not a document of title: the consignee named can collect the goods"],
 awb:()=>[`Shows the goods accepted for carriage; the issue date is the shipment date unless the credit asks for a flight date (${A_(23)})`,"Airports as in 44E and 44F","The original for consignor or shipper",`Not a document of title: the named consignee can collect the goods`],
 road:()=>[`Shows the place of dispatch and destination, and is signed or stamped by the carrier (${A_(24)})`,"Consignee as required"],
 ins:()=>[`Dated no later than shipment, unless it shows cover from the shipment date (${A_(28,"(e)")})`,`At least 110% of the CIF or CIP value if the credit is silent, and in the credit currency (${A_(28,"(f)")})`,`Covers the risks the credit names (${A_(28,"(g)")})`,`A policy or certificate, not a cover note (${A_(28,"(c)")}); all originals presented`],
 coo:()=>["Issued by the body the credit names, such as a chamber of commerce or export promotion council","Goods, origin and consignee details don't conflict with other documents","Allow extra time if it must be legalised or attested"],
 insp:()=>["Issued by the agency the credit names: book the inspection early","Dated no later than shipment if it certifies pre-shipment inspection","If it must be signed or approved by the buyer, payment depends on the buyer: see the watch-outs"],
 benc:()=>["Worded as the credit requires and signed by you","Whatever it certifies (for example, copies sent to the buyer) has actually happened, within any time stated"],
 adv:()=>["Sent within the time stated, to the party named","Present the evidence the credit asks for, such as a copy of the email"],
 courier:()=>[`Shows the courier's name, stamp or signature and the date of pick-up (${A_(25)})`],
 draft:()=>["Drawn on the party in 42a, for the tenor in 42C","Amount in words and figures agree, and within the credit"],
 other:()=>[`Issued by the party the credit names, with the content it requires; if silent, it must appear to fulfil its function (${A_(14,"(f)")})`,`Data does not conflict with the other documents (${A_(14,"(d)")})`]
};
["pl","phyto","fum","health","qual","wt"].forEach(k=>DOC_CHECKS[k]=DOC_CHECKS.other);
function decDoc(item){
  const U=item.toUpperCase();
  let best=null;DOC_TYPES.forEach(d=>{const m=d[1].exec(U);if(m&&(!best||m.index<best.i))best={d,i:m.index};});
  const ty=best?best.d:["other",null,"Other document",""];
  const hi=[];let m;
  const NUM={ONE:1,TWO:2,THREE:3,FOUR:4,FIVE:5,SIX:6};
  if(/FULL SET/.test(U))hi.push("Full set of originals");
  if((m=/\b(\d)\s*\/\s*(\d)\b(?=[^.]*ORIGINAL)/.exec(U)))hi.push(m[1]+"/"+m[2]+" originals");
  const re=/\b(\d{1,2}|ONE|TWO|THREE|FOUR|FIVE|SIX)\b\s*(?:\([A-Z0-9]+\)\s*)?(ORIGINALS?|COPIES|COPY|FOLDS?)\b/g;
  while((m=re.exec(U)))hi.push((NUM[m[1]]||m[1])+" "+m[2].toLowerCase().replace("folds","copies").replace("fold","copy"));
  if((m=/IN (DUPLICATE|TRIPLICATE|QUADRUPLICATE)/.exec(U)))hi.push({DUPLICATE:"2",TRIPLICATE:"3",QUADRUPLICATE:"4"}[m[1]]+" (in "+m[1].toLowerCase()+")");
  if(/\bSIGNED\b(?!\s+BY)/.test(U))hi.push("Signed");
  if((m=/(?:MADE OUT )?TO (?:THE )?ORDER OF ([A-Z0-9' .&()-]{3,60}?)(?=,|\.|;| AND | NOTIFY| MARKED| SHOWING|$)/.exec(U)))hi.push("To the order of "+m[1].trim());
  else if(/MADE OUT TO ORDER|\bTO ORDER\b/.test(U))hi.push("To order");
  if((m=/CONSIGNED TO ([A-Z0-9' .&()-]{3,60}?)(?=,|\.|;| AND | NOTIFY| MARKED|$)/.exec(U)))hi.push("Consigned to "+m[1].trim());
  if((m=/NOTIFY(?:ING)?(?: PARTY)?[:\s]+([A-Z0-9' .&()-]{3,50}?)(?=,|\.|;| AND | MARKED|$)/.exec(U)))hi.push("Notify "+m[1].trim().toLowerCase().replace(/\b\w/g,c=>c.toUpperCase()));
  if((m=/FREIGHT (PREPAID|COLLECT|PAYABLE AT DESTINATION|TO PAY)/.exec(U)))hi.push("Freight "+m[1].toLowerCase());
  if(/CLEAN ON BOARD|SHIPPED ON BOARD|\bON BOARD\b/.test(U))hi.push("On board");
  if(/BLANK ENDORSED|ENDORSED IN BLANK/.test(U))hi.push("Blank endorsed");
  if((m=/(\d{3})\s*(?:%|PCT|PERCENT)/.exec(U)))hi.push(m[1]+"% cover");
  if((m=/INSTITUTE CARGO CLAUSES\s*\(?([ABC])\)?/.exec(U)))hi.push("ICC ("+m[1]+")");
  if(/\bALL RISKS\b/.test(U))hi.push("All risks");
  if(/\bWAR\b/.test(U))hi.push("War");if(/STRIKES?|SRCC/.test(U))hi.push("Strikes");
  if((m=/ISSUED BY ([A-Z][A-Z0-9' .&()-]{3,60}?)(?=,|\.|;| CERTIFY| SHOWING| STATING| AND |$)/.exec(U)))hi.push("Issued by "+m[1].trim());
  if(/LEGALI[SZ]ED|ATTESTED|CONSULAR|EMBASSY|CONSULATE/.test(U))hi.push("Legalised / attested");
  return {key:ty[0],name:ty[2],art:ty[3],text:item,hi:[...new Set(hi)]};
}
const decSnip=(text,re)=>{const U=String(text);const m=re.exec(U.toUpperCase());if(!m)return "";let s=Math.max(0,U.lastIndexOf(".",m.index)+1),e=U.indexOf(".",m.index+m[0].length);if(e<0)e=U.length;let out=U.slice(s,e+1).replace(/\s+/g," ").trim();if(out.length>220)out=out.slice(0,217)+"…";return out;};
const SOFT=[
 [/(SIGNED|ISSUED|COUNTERSIGNED|APPROVED|AUTHENTICATED|VERIFIED|ENDORSED)\s+BY\s+(THE\s+)?(APPLICANT|BUYER|OPENER|IMPORTER)\b|(APPLICANT|BUYER)'?S?\s+(SIGNATURE|APPROVAL|REPRESENTATIVE)/,"A document must be signed or approved by the buyer","The buyer can stop you complying simply by not signing. This is a classic soft clause: ask for it to be removed, or for the certificate to be issued by an independent inspection agency."],
 [/SUBJECT TO (THE\s+)?(APPLICANT|BUYER)'?S?\s+(APPROVAL|ACCEPTANCE|CONFIRMATION|SATISFACTION|CONSENT)/,"Something is subject to the buyer's approval","Payment then depends on the buyer, not the bank. Ask for this clause to be removed before you ship."],
 [/(CREDIT|L\/?C|D\/?C)\s+(WILL\s+BE(COME)?|IS|SHALL\s+BE(COME)?)\s+(OPERATIVE|EFFECTIVE|AVAILABLE|ACTIVATED)\s+(ONLY\s+)?(UPON|AFTER|ON|SUBJECT)/,"The credit is not yet operative","The bank's undertaking starts only when a further event happens, usually an amendment from the buyer's side. Don't ship until you receive that amendment."],
 [/(WILL\s+BE|TO\s+BE|SHALL\s+BE)\s+(ADVISED|NOMINATED|NOTIFIED|INFORMED|INDICATED)\s+(LATER|SUBSEQUENTLY|BY\s+(MEANS\s+OF\s+)?(AN\s+)?AMENDMENT|BY\s+(THE\s+)?(APPLICANT|BUYER))/,"A key detail will be advised later","Until that detail arrives (often the vessel, shipping line or inspection agency), you cannot comply, and the buyer decides when it arrives. Ask for it to be fixed in the credit now."],
 [/PAYMENT\b[^.]{0,40}\b(UPON|AFTER|ON|SUBJECT TO)\s+(THE\s+)?(RECEIPT|ARRIVAL|CLEARANCE|INSPECTION|ACCEPTANCE|SALE)\s+OF\s+(THE\s+)?GOODS|(UPON|AFTER)\s+(ARRIVAL|RECEIPT|INSPECTION)\s+OF\s+(THE\s+)?GOODS/,"Payment is linked to the goods arriving or being inspected","An LC should pay against documents, not against the goods. A condition like this makes payment depend on events the buyer controls."],
 [/(UPON|AFTER|SUBJECT TO|PENDING)\s+(THE\s+)?(RECEIPT\s+OF\s+)?(FUNDS|PAYMENT|COVER)\s+FROM\s+(THE\s+)?(APPLICANT|BUYER)|(UPON|AFTER|SUBJECT TO|PENDING)\s+(THE\s+)?(RECEIPT\s+OF\s+)?(AN?\s+)?IMPORT\s+(LICEN[CS]E|PERMIT)/,"Payment depends on the buyer's funds or an import licence","The bank is not giving a firm undertaking. If the funds or licence never come, you are not paid."],
 [/(1\/3|ONE\s*(\(1\))?\s*(\/\s*THREE|OF\s*(THE\s*)?THREE)|ONE\s+ORIGINAL)[^.]{0,80}(SENT|DESPATCHED|DISPATCHED|COURIERED|FORWARDED|DIRECTLY)[^.]{0,40}(TO\s+(THE\s+)?(APPLICANT|BUYER|CONSIGNEE))/,"One original bill of lading goes directly to the buyer","With one original in hand, the buyer can take delivery of the goods without paying. If your documents are then refused, you have lost control of the goods."]
];
function decCheck(P){
  const F=P.F,out=[],add=(lvl,t,d,ref,f)=>out.push({lvl,t,d,ref:ref||"",f:f||[]});
  const td=today0();
  const T=k=>String(F[k]||"").toUpperCase();
  const all=["45A","45B","46A","46B","47A","47B","49G","49M","78"].map(T).join("\n");
  const SUB={};
  if(P.type==="707"){
    add("info","You can accept or reject this amendment",`Until you accept, the original terms still apply to you. Presenting documents that comply with the amended terms counts as acceptance. You must accept all of it or none of it: accepting only part is treated as rejection (${A_(10,"(c)")}, ${A_(10,"(e)")}).`,"",[]);
    if(F["23S"])add("red","The issuing bank asks to cancel the credit",`A credit cannot be cancelled without your agreement (${A_(10,"(a)")}). Don't agree if you have shipped, or are about to.`,"",["23S"]);
    if(/DEEMED\s+(TO\s+BE\s+)?ACCEPTED|UNLESS\s+REJECTED|IF\s+NOT\s+REJECTED|IN\s+FORCE\s+UNLESS/.test(all))add("amber","\"Deemed accepted unless rejected\" clause",`A provision that an amendment takes effect unless you reject it within a set time is disregarded (${A_(10,"(f)")}). Your silence is not acceptance, but reply clearly either way.`,"",["47B"]);
    if(F["33B"])add("amber","The credit amount is reduced",`New decrease: ${esc(decFmtAmt(decAmt(F["33B"])))}. Check the quantity or price changes in 45B match, and that the reduced amount still covers your shipment.`,"",["33B"]);
    if(F["32B"])add("info","The credit amount is increased",`Increase: ${esc(decFmtAmt(decAmt(F["32B"])))}. Check that 45B shows the matching quantity or price change.`,"",["32B"]);
    const e=decDate(F["31D"]);if(e){const d=dayDiff(td,e.d);add(d<14?"amber":"info","New expiry date",`The credit now expires on ${fmtD(e.d)}${e.rest?" at "+esc(e.rest):""}${d>=0?`, ${d} days from today`:", which has already passed"}. Check this still works for your shipment.`,"",["31D"]);}
    const s=decDate(F["44C"]);if(s||F["44D"])add("amber","Shipment date or period changed",`${s?`Latest shipment is now ${fmtD(s.d)}. `:""}Check with your forwarder that you can meet it before you accept.`,"",[s?"44C":"44D"]);
    ["45B","46B","47B","49M"].forEach(k=>{if(F[k])add("amber",{"45B":"Goods description changed","46B":"Documents required changed","47B":"Additional conditions changed","49M":"Special payment conditions changed"}[k],"Read the change below and check it with your forwarder and anyone who issues documents for you. <b>/ADD/</b> adds text, <b>/DELETE/</b> removes it, and <b>/REPALL/</b> replaces the whole field.","",[k]);});
    if(/BENE/.test(T("71N")))add("amber","Amendment charges are for your account","Field 71N says the beneficiary pays the charges for this amendment. If you didn't ask for it, you can negotiate this.","",["71N"]);
    if(F["43P"]||F["43T"])add("info","Partial shipment or transhipment rules changed","Check the new value in 43P / 43T against how you plan to ship.","",["43P","43T"].filter(k=>F[k]));
    if(F["40E"])add("amber","Applicable rules changed","The rules governing the credit are being changed. Read field 40E carefully.","",["40E"]);
    if(F["49"])add("info","Confirmation instructions changed",`Field 49 now says: ${esc(F["49"])}.`,"",["49"]);
  }else{
    // completeness
    const need=[["20","LC number"],["31D","expiry"],["32B","amount"],["41A|41D","availability"],["45A","goods description"],["46A","documents required"]];
    const miss=need.filter(([k])=>!k.split("|").some(x=>F[x])).map(([k,n])=>k.split("|")[0].replace(/A$/,(k.includes("41")?"a":"A"))+" ("+n+")");
    if(miss.length)add("amber","Some fields were not found","Missing: "+miss.join(", ")+". If you pasted only part of the LC, the results below will be incomplete.","",[]);
    if(/1\/[2-8]/.test(T("27"))&&!P.merged)add("info","The LC continues in another message",`Field 27 says ${esc(F["27"])}: an MT701 continuation follows. Paste it below the MT700 so 45A, 46A and 47A are complete.`,"",["27"]);
    // form and rules
    if(/\bREVOCABLE/.test(T("40A"))&&!/IRREVOCABLE/.test(T("40A")))add("red","The credit says it is revocable",`It could be cancelled without notice. UCP 600 credits are irrevocable (${A_(3)}); ask for this to be corrected.`,"",["40A"]);
    if(/TRANSFERABLE/.test(T("40A")))add("info","Transferable credit",`It can be transferred to a second beneficiary, such as your supplier (${A_(38)}).`,"",["40A"]);
    const r=T("40E");
    if(!r)add("amber","No applicable rules stated","Field 40E is missing. A credit should say it is subject to UCP 600 (\"UCP LATEST VERSION\").","",[]);
    else if(/ISP/.test(r))add("amber","Subject to ISP98, not UCP 600","This looks like a standby credit. Several checks on this page assume UCP 600 and may not apply.","",["40E"]);
    else if(/OTHR/.test(r))add("amber","Subject to other rules","Field 40E says OTHR. Read the narrative to see which rules apply before relying on UCP 600.","",["40E"]);
    else if(/EUCP/.test(r))add("info","Electronic presentation allowed (eUCP)","The eUCP applies alongside UCP 600: check the format and place for electronic records in the credit.","",["40E"]);
    // dates
    const ex=decDate(F["31D"]),ls=decDate(F["44C"]),is=decDate(F["31C"]);
    const pm=/(\d{1,3})/.exec(T("48"));const per=pm?+pm[1]:null;const P2=per||21;
    if(ex&&dayDiff(td,ex.d)<0)add("red","The credit has expired",`The expiry date was ${fmtD(ex.d)}.`,"",["31D"]);
    if(ls&&ex&&ls.d>ex.d)add("red","Latest shipment is after expiry",`Shipping on the latest date (${fmtD(ls.d)}) would leave no time to present documents before expiry (${fmtD(ex.d)}). Ask for an amendment.`,"",["44C","31D"]);
    else if(ls&&ex){const gap=dayDiff(ls.d,ex.d);
      if(gap<P2)add(gap<10?"amber":"info",`Only ${gap} days between latest shipment and expiry`,`Documents must be presented within ${P2} days of shipment${per?"":" (the default, as 48 is silent)"}, but never after expiry (${A_(14,"(c)")}, ${A_(6,"(e)")}). If you ship on ${fmtD(ls.d)}, your real deadline is the expiry date, ${gap} days later. Shipping earlier gives you more time.`,"",["44C","31D","48"]);}
    if(ls&&dayDiff(td,ls.d)<0)add("amber","The latest shipment date has passed",`It was ${fmtD(ls.d)}. Unless you have already shipped, you need an amendment. It is never extended for a holiday (${A_(29,"(c)")}).`,"",["44C"]);
    if(F["44C"]&&F["44D"])add("amber","Both 44C and 44D are present","A credit should give either a latest shipment date or a shipment period, not both. Ask which applies.","",["44C","44D"]);
    if(!F["44C"]&&!F["44D"])add("info","No latest shipment date",`You can ship up to the expiry date, but documents must still be presented within ${P2} days of shipment and before expiry.`,"",[]);
    if(!F["48"])add("info","No presentation period stated",`The default applies: documents containing an original transport document must be presented within 21 calendar days after shipment, and before expiry (${A_(14,"(c)")}).`,"",[]);
    else if(per&&per<10)add("amber",`Short presentation period: ${per} days`,"Getting the bill of lading, certificates and your bank's check done in this time is tight. Ask for at least 21 days if you can.","",["48"]);
    // expiry place & availability
    const place=ex?ex.rest:T("31D");const bc=decCountry(F["59"]||F["59A"])||"INDIA";const ac=decCountry(F["50"]);
    const counters=/COUNTER|ISSUING BANK/.test(place.toUpperCase());const epC=counters?(ac||"ABROAD"):decCountry(place);
    const av=T("41A")+" "+T("41D");const mode=(/BY\s+(PAYMENT|ACCEPTANCE|NEGOTIATION|DEF\.?\s*PAYMENT|DEFERRED PAYMENT|MIXED\s+P(?:YMT|AYMENT))/.exec(av)||[])[1]||"";
    const avIss=/ISSUING BANK|OURSELVES|\bUS\b|OUR COUNTERS/.test(av)||(ac&&!/ANY BANK/.test(av)&&decCountry(av)===ac);
    const abroad=epC&&epC!==bc;
    if(abroad&&avIss)add("red","Expires abroad and available only with the issuing bank",`The credit pays only when the issuing bank receives complying documents abroad before expiry; your bank only forwards them. Courier time comes out of your presentation period. Ask for the credit to be available with any bank in ${bc==="INDIA"?"India":"your country"}, by negotiation, and to expire there.`,"",["31D","41A","41D"].filter(k=>F[k]));
    else if(abroad)add("amber",`Expires abroad${epC&&epC!=="ABROAD"?" ("+epC.toLowerCase().replace(/\b\w/g,c=>c.toUpperCase()).replace("Uae","UAE").replace("Usa","USA").replace("Uk","UK")+")":""}`,`Documents must reach ${esc(place)||"the place in 31D"} by the expiry date, not just leave your bank. Allow for your bank's checking time and courier time.`,"",["31D"]);
    else if(!epC&&place)add("info","Check where the credit expires",`Field 31D gives the place as "${esc(place)}". If that is outside your country, documents must reach it by the expiry date.`,"",["31D"]);
    if(avIss&&!abroad)add("info","Available only with the issuing bank","Only the issuing bank pays under the credit; your bank forwards the documents. Payment comes once the issuing bank has checked them.","",["41A","41D"].filter(k=>F[k]));
    // drafts
    const dr=T("42A")+" "+T("42D");const ap1=(T("50").split("\n")[0]||"").replace(/[^A-Z]/g,"").slice(0,12);
    if(dr.trim()&&(/APPLICANT|BUYER|OPENER/.test(dr)||(ap1.length>5&&dr.replace(/[^A-Z]/g,"").includes(ap1))))add("red","Draft drawn on the applicant",`A credit must not be available by a draft drawn on the applicant (${A_(6,"(c)")}). Such a draft is treated only as an additional document; ask for 42a to name the issuing bank or the nominated bank.`,"",["42A","42D"].filter(k=>F[k]));
    if(/DEF/.test(mode)&&F["42C"])add("amber","Drafts asked for under deferred payment","A deferred payment credit doesn't use drafts. Ask the bank to clarify fields 41a and 42C.","",["41A","41D","42C"].filter(k=>F[k]));
    const us=/(\d{1,3})\s*DAYS?\s*(AFTER|FROM)\s*(SIGHT|THE\s+)?(DATE\s+OF\s+)?(SIGHT|B\s?\/\s?L|BILL OF LADING|SHIPMENT|INVOICE|ACCEPTANCE|AIR\s*WAY\s*BILL|AWB|PRESENTATION)?/.exec(T("42C")+" "+T("42P")+" "+T("42M"));
    const usPaS=/(USANCE|DISCOUNT|ACCEPTANCE|INTEREST)[^.]{0,60}(CHARGES|INTEREST|COMMISSION|COST)?[^.]{0,40}(FOR|BORNE BY|ON)\s+(THE\s+)?(APPLICANT|BUYER|OPENER)|PAYABLE\s+(ON\s+|AT\s+)?SIGHT\s+BASIS|USANCE\s+PAYABLE\s+AT\s+SIGHT/.test(all);
    if(us&&usPaS)add("info","Usance credit payable at sight",`The draft is at ${us[1]} days, but the credit says the buyer bears the discount or interest. You should be paid at sight, without a deduction for interest.`,"",["42C","47A"].filter(k=>F[k]));
    else if(us)add("info",`Usance credit: ${us[1]} days`,`You are paid at maturity, ${us[1]} days ${us[2].toLowerCase()} ${(us[5]||us[3]||"").toLowerCase().replace("b / l","B/L").replace("b/l","B/L").trim()||"the stated event"}, unless your bank discounts the bill. Discounting gets you the money earlier, minus interest.`,"",["42C"]);
    // tolerance
    const amt=decAmt(F["32B"]);const tol=/(\d{1,2})\s*\/\s*(\d{1,2})/.exec(T("39A"));
    if(/\b(ABOUT|APPROXIMATELY|APPROX\.?|CIRCA)\b/.test(T("45A")))add("info","\"About\" or \"approximately\" in the goods description",`These words allow a tolerance of 10% more or less on the quantity, amount or unit price they refer to (${A_(30,"(a)")}).`,"",["45A"]);
    // shipments
    const p43=T("43P"),t43=T("43T");
    const inst=/INSTAL+MENT|\bIN\s+(TWO|THREE|FOUR|\d)\s+(LOTS|SHIPMENTS|CONSIGNMENTS)|MONTHLY SHIPMENT|WEEKLY SHIPMENT|SHIPMENT SCHEDULE/.test(all+" "+T("44D"));
    if(/NOT\s+ALLOWED|PROHIBITED/.test(p43)&&inst)add("amber","Partial shipments not allowed, but the credit mentions lots or instalments","These conflict. Ask the bank which applies before you ship.","",["43P"]);
    else if(inst)add("amber","Shipment in instalments",`If any instalment is not shipped within its period, the credit stops being available for that and every later instalment (${A_(32)}).`,"",["44D","47A"].filter(k=>F[k]));
    if(/NOT\s+ALLOWED|PROHIBITED/.test(t43))add("info","Transhipment not allowed",`Even so, a bill of lading showing transhipment is acceptable if the goods are shipped in containers, as shown on the bill of lading (${A_(20,"(c)")}). Tell your forwarder about this condition.`,"",["43T"]);
    // incoterm & documents
    const inc=decIncoterm(F);const docs=decItems(F["46A"]).map(decDoc);const has=k=>docs.some(d=>d.key===k);
    const D46=T("46A");const air=/AIR\s*WAY\s*BILL|\bAWB\b|AIRPORT/.test(D46+T("44E")+T("44F"));
    if(!inc&&F["45A"])add("info","No Incoterm found in 45A","Most credits state the delivery term (for example \"CIF Jebel Ali, Incoterms 2020\"). Without one, check who pays freight and insurance.","",["45A"]);
    if(inc){
      if(inc.term==="DAT")add("amber","DAT is an old Incoterm","DAT was replaced by DPU in Incoterms 2020. Check which rules the parties intend.","",["45A"]);
      else if(inc.ver&&+inc.ver<2020)add("info","Older Incoterms version",`The credit refers to Incoterms ${inc.ver}. That is allowed, but make sure your contract uses the same version.`,"",["45A"]);
      const cTerm=/^(CFR|CIF|CPT|CIP)$/.test(inc.term),fTerm=/^(EXW|FCA|FAS|FOB)$/.test(inc.term),insT=/^(CIF|CIP)$/.test(inc.term);
      if(cTerm&&/FREIGHT\s+(COLLECT|PAYABLE AT DESTINATION|TO PAY)/.test(D46))add("red",`${inc.term} but the transport document must show "freight collect"`,`Under ${inc.term} you pay the main freight, so the transport document would normally say "freight prepaid". This conflict could lead to a discrepancy or a freight dispute. Ask for an amendment.`,"",["45A","46A"]);
      if(fTerm&&/FREIGHT\s+PREPAID/.test(D46))add("amber",`${inc.term} but the transport document must show "freight prepaid"`,`Under ${inc.term} the buyer pays the main freight. If you are being asked to prepay it, make sure that cost is in your price.`,"",["45A","46A"]);
      if(insT&&!has("ins"))add("amber",`${inc.term} but no insurance document is asked for`,`Under ${inc.term} you arrange the insurance. Check whether the credit should ask for an insurance document, so the buyer can't dispute it later.`,"",["45A","46A"]);
      if(!insT&&has("ins"))add("amber",`Insurance document asked for under ${inc.term}`,`Under ${inc.term} insurance is the buyer's concern, but the credit asks you for an insurance document. Make sure the premium is in your price.`,"",["45A","46A"]);
      if(/^(FOB|CFR|CIF|FAS)$/.test(inc.term)&&air)add("amber",`${inc.term} used for an air shipment`,`${inc.term} is meant for sea transport. For air or container shipments, FCA, CPT or CIP fit better.`,"",["45A"]);
    }
    if(has("ins")){const d=docs.find(x=>x.key==="ins");if(!/(\d{3})\s*(%|PCT|PERCENT)/.test(d.text.toUpperCase()))add("info","Insurance amount not stated",`The minimum is then 110% of the CIF or CIP value (${A_(28,"(f)")}).`,"",["46A"]);}
    // documents: straight consignment, legalisation
    docs.forEach(d=>{const U=d.text.toUpperCase();
      if((d.key==="awb"||d.key==="road"||d.key==="swb")&&/CONSIGNED TO\s+(THE\s+)?(APPLICANT|BUYER)|CONSIGNEE[:\s]+(THE\s+)?(APPLICANT|BUYER)/.test(U)||(d.key==="awb"&&ap1.length>5&&U.replace(/[^A-Z]/g,"").includes("CONSIGNEDTO"+ap1)))
        add("amber",`${d.name} consigned to the buyer`,"The carrier will hand the goods to the buyer without any original document. If your documents are refused, you have already lost control of the goods. Ask for the goods to be consigned to the issuing bank, with its agreement.","",["46A"]);
      if(d.key==="bl"&&/CONSIGNED TO\s+(THE\s+)?(APPLICANT|BUYER)/.test(U)&&!/ORDER/.test(U))add("amber","Bill of lading consigned directly to the buyer","A straight bill of lading gives the bank no security over the goods. In some countries the buyer can collect the goods without it.","",["46A"]);
      if(/LEGALI[SZ]ED|ATTESTED BY (THE\s+)?(EMBASSY|CONSULATE)|CONSULAR/.test(U))add("amber",`${d.name} must be legalised or attested`,"Embassy or consulate attestation can take days. Build this into your timeline from shipment to presentation.","",["46A"]);
    });
    // 47A content
    const dTxt=all+" "+T("71D");const m47=/DISCREPANC(?:Y|IES)\s+(?:FEES?|CHARGES?)[^.]*?\b([A-Z]{3})\s*(\d[\d,]*(?:\.\d+)?)/.exec(dTxt)||/\b([A-Z]{3})\s*(\d[\d,]*(?:\.\d+)?)\b[^.]{0,60}DISCREPANC/.exec(dTxt);
    if(m47)add("amber","Discrepancy fee",`Each discrepant presentation costs ${esc(m47[1]+" "+m47[2])}, deducted from what you are paid. One more reason to get the documents right first time.`,"",["47A"]);
    else if(/DISCREPANC/.test(all))add("info","Discrepancy fee clause","The credit mentions a fee for discrepant documents; check the amount in 47A or 71D.","",["47A"]);
    if(/(ALL\s+)?DOCUMENTS?\s+(MUST|SHOULD|TO)\s+(BEAR|SHOW|INDICATE|QUOTE|MENTION)\s+(THE\s+|THIS\s+)?(L\s?\/\s?C|D\s?\/\s?C|CREDIT|DC|LC)\s*(NO|NUMBER)?/.test(all))add("info","Every document must show the LC number","Easy to miss on documents others issue, like the bill of lading or certificate of origin. Tell them in advance.","",["47A"]);
    if(/DATED\s+(PRIOR|EARLIER|BEFORE)[^.]{0,30}(ISSU|L\s?\/\s?C|CREDIT)[^.]{0,30}NOT\s+ACCEPTABLE|NOT\s+(BE\s+)?DATED\s+(PRIOR|EARLIER|BEFORE)/.test(all))add("info","Documents dated before the LC are not accepted",`Normally documents may be dated before the credit (${A_(14,"(i)")}); this credit overrides that. Check the dates of certificates you already hold.`,"",["47A"]);
    if(/THIRD\s+PARTY\s+DOCUMENTS?\s+(ARE\s+)?NOT\s+ACCEPTABLE/.test(all))add("amber","Third-party documents not acceptable","All documents must show you (the beneficiary) as shipper or issuer. If your supplier or a trading house ships the goods, this will cause a discrepancy.","",["47A"]);
    if(/STALE\s+DOCUMENTS?\s+(ARE\s+)?ACCEPTABLE/.test(all))add("info","Stale documents acceptable","Documents may be presented after the 21-day period, but still before expiry.","",["47A"]);
    // non-documentary conditions
    decItems(F["47A"]).forEach(s=>{const U=s.toUpperCase();
      if(/\b(MUST|SHOULD|SHALL|TO BE|NOT ALLOWED|NOT PERMITTED|PROHIBITED)\b/.test(U)&&/(ORIGIN|VESSEL|SHIP\b|SHIPS\b|CARRIER|FLAG|CONTAINER|PACK|LABEL|MARKING|AGE\b|ROUTE|CALL\b|QUALITY)/.test(U)&&!/(CERTIFICATE|STATEMENT|DECLARATION|DOCUMENT|INVOICE|B\s?\/\s?L|BILL OF LADING|WAYBILL|PACKING LIST|EVIDENC|SHOWING|INDICATING|CERTIFY|ATTEST|PRESENT|DRAFT|ADVICE|CHARGES)/.test(U))
        add("info","A condition with no document to prove it",`"${esc(s.length>160?s.slice(0,157)+"…":s)}" Banks disregard a condition like this when checking documents (${A_(14,"(h)")}), but none of your documents should contradict it.`,"",["47A"]);
    });
    // confirmation & charges
    const c49=T("49");
    if(/WITHOUT/.test(c49))add("info","Not confirmed","You rely on the issuing bank alone. If you are unsure about the bank or its country, ask your bank about adding its confirmation (or a silent confirmation).","",["49"]);
    else if(/MAY ADD/.test(c49))add("info","Confirmation may be added",`Your bank may confirm at your request; the fee is usually yours. A confirming bank adds its own undertaking to pay (${A_(8)}).`,"",["49"]);
    else if(/CONFIRM/.test(c49))add("info","Confirmation requested",`The confirming bank adds its own undertaking to pay (${A_(8)}). Check field 71D for who pays the confirmation fee.`,"",["49"]);
    const ch=T("71D");
    if(/ALL\b[^.]*CHARGES[^.]*(BENEFICIAR|EXPORTER|SELLER)/.test(ch)&&!/OUTSIDE|EXCEPT|OTHER THAN|EXCLUDING/.test(ch))add("amber","All bank charges are for your account","That includes the issuing bank's charges, which are normally the buyer's. Price this in, or ask for charges outside your country only.","",["71D"]);
  }
  // soft clauses (both types)
  SOFT.forEach(([re,title,why])=>{if(re.test(all)){const s=decSnip(all,re);SUB[title]=1;add("red",title,(s?`"${esc(s)}" `:"")+why,"",[P.type==="707"?"47B":"47A"].filter(k=>F[k]).concat(F["46A"]&&re.test(T("46A"))?["46A"]:[]))}});
  const ord={red:0,amber:1,info:2};
  return out.sort((a,b)=>ord[a.lvl]-ord[b.lvl]);
}
function decMeaning(tag,v,P){
  const F=P.F,U=String(v).toUpperCase();let d,a,m;
  switch(tag){
    case "27":return /1\/[2-8]/.test(U)?"This is the first of several messages: MT701 continuation(s) follow.":"The whole credit is in this one message.";
    case "40A":return (/IRREVOCABLE/.test(U)?"Irrevocable: it cannot be amended or cancelled without your agreement.":"Form of the credit.")+(/TRANSFERABLE/.test(U)?" Transferable: it can be passed on to a second beneficiary.":"");
    case "20":return P.type==="707"?"The number of the credit being amended.":"The LC number. Quote it on your documents if the credit asks.";
    case "31C":return (d=decDate(v))?"Issued on "+fmtD(d.d)+".":"";
    case "30":return (d=decDate(v))?"Amendment dated "+fmtD(d.d)+".":"";
    case "26E":return "Amendment number "+String(+U.replace(/\D/g,"")||U)+". Amendments are numbered in order; check you have received all earlier ones.";
    case "22A":return {ISSU:"Amendment issued by the issuing bank.",ADVI:"Advice of an amendment.",ACNF:"Advice of an amendment, with confirmation."}[U.trim()]||"Purpose of the message.";
    case "23S":return "A request to cancel the credit. It needs your agreement.";
    case "40E":return /EUCPURR/.test(U)?"eUCP and UCP 600, with bank reimbursement under URR 725.":/UCPURR/.test(U)?"UCP 600, with bank reimbursement under URR 725.":/EUCP/.test(U)?"eUCP 2.1 with UCP 600: electronic presentation allowed.":/UCP/.test(U)?"Subject to UCP 600, the standard rules for documentary credits.":/ISP/.test(U)?"ISP98: the rules for standby credits.":"Other rules: see the narrative.";
    case "31D":return (d=decDate(v))?`Expires on ${fmtD(d.d)}${d.rest?" at "+esc(d.rest):""}. Documents must be presented there by this date.${dayDiff(today0(),d.d)>=0?` That is ${dayDiff(today0(),d.d)} days from today.`:" This date has passed."}`:"";
    case "50":return "The buyer (applicant). Documents made out to the applicant should use this name.";
    case "59":case "59A":return `You, the exporter (beneficiary). Your address on documents may differ from this, as long as it is in the same country (${A_(14,"(j)")}).`;
    case "51A":case "51D":return "The applicant's bank, if it is different from the issuing bank.";
    case "52A":case "52D":return "The bank that issued the credit.";
    case "32B":if(P.type==="707")return "Amount the credit increases by: "+esc(decFmtAmt(decAmt(v)))+".";
      a=decAmt(v);if(!a)return "";m=/(\d{1,2})\s*\/\s*(\d{1,2})/.exec(String(F["39A"]||""));
      return "Credit amount "+esc(decFmtAmt(a))+"."+(m?` With the tolerance in 39A, you can draw between ${esc(decFmtAmt({ccy:a.ccy,v:a.v*(1-m[2]/100)}))} and ${esc(decFmtAmt({ccy:a.ccy,v:a.v*(1+m[1]/100)}))}.`:" No tolerance is stated, so you cannot draw more than this.");
    case "33B":return "Amount the credit decreases by: "+esc(decFmtAmt(decAmt(v)))+".";
    case "39A":m=/(\d{1,2})\s*\/\s*(\d{1,2})/.exec(U);return m?`You may draw up to ${+m[1]}% more or ${+m[2]}% less than the credit amount.`:"";
    case "39C":return "Extra amounts the credit also covers, such as freight or interest.";
    case "41A":case "41D":{const by=(/BY\s+([A-Z. ]+)/.exec(U)||[])[1]||"";const w=/ANY BANK/.test(U)?"Any bank can act as the nominated bank. ":/ISSUING BANK/.test(U)?"Only the issuing bank honours the credit. ":"The bank named here is the nominated bank. ";
      return w+(/NEGOT/.test(by)?`By negotiation: the nominated bank can buy your documents and pay you before it is reimbursed (${A_(2)}).`:/DEF/.test(by)?"By deferred payment: the bank undertakes to pay on a future date; no draft is used.":/ACCEPT/.test(by)?"By acceptance: the bank accepts your draft and pays it at maturity.":/MIXED/.test(by)?"By mixed payment: see 42M.":/PAYMENT/.test(by)?"By sight payment: you are paid when complying documents are presented.":"");}
    case "42C":return /SIGHT/.test(U)&&!/DAYS/.test(U)?"Sight draft: payable when complying documents are presented.":(m=/(\d{1,3})\s*DAYS?/.exec(U))?`Usance draft: payable ${m[1]} days after the stated event.`:"";
    case "42A":case "42D":return "The party your draft is drawn on. It should be a bank, never the applicant.";
    case "42M":return "How payment is split between sight, deferred payment or acceptance.";
    case "42P":return "Dates or terms for negotiation or deferred payment.";
    case "43P":return /NOT\s+ALLOWED|PROHIBITED/.test(U)?`All goods must be shipped at once (${A_(31)}).`:/CONDITIONAL/.test(U)?"Allowed under conditions stated in 47A.":/ALLOWED|PERMITTED/.test(U)?`You may ship in parts and present documents for each (${A_(31)}).`:"";
    case "43T":return /NOT\s+ALLOWED|PROHIBITED/.test(U)?`The goods should not be moved from one vessel to another during carriage (but see ${A_(20,"(c)")} for containers).`:/ALLOWED|PERMITTED/.test(U)?"The goods may be moved from one vessel or vehicle to another during carriage.":"";
    case "44A":return "Where the carrier takes the goods in charge (for multimodal or road transport).";
    case "44E":return "The port or airport of loading. It must appear on the transport document.";
    case "44F":return "The port or airport of discharge. It must appear on the transport document.";
    case "44B":return "The final destination, for multimodal or road transport.";
    case "44C":return (d=decDate(v))?`Ship no later than ${fmtD(d.d)}. This date is never extended for a holiday (${A_(29,"(c)")}).`:"";
    case "44D":return "The period in which shipment must take place.";
    case "45A":{const inc=decIncoterm(F);return `Your invoice must describe the goods so that it corresponds with this (${A_(18,"(c)")}).`+(inc?` Delivery term found: <b>${esc(inc.term)}${inc.place?" "+esc(inc.place):""}</b>${inc.ver?" (Incoterms "+inc.ver+")":""}.`:"");}
    case "46A":return decItems(v).length+" document(s) required. See the checklist above.";
    case "47A":return decItems(v).length+" condition(s). Any that need attention are listed in the watch-outs.";
    case "45B":case "46B":case "47B":case "49M":case "49N":return "Codes: /ADD/ adds text, /DELETE/ removes it, /REPALL/ replaces the whole field.";
    case "49G":return "Conditions for payment that apply to you. Read them carefully.";
    case "49H":return "Conditions for the banks only. They are not passed on to you in full.";
    case "71D":return "Who pays which bank charges. If silent, charges outside the issuing bank are usually yours.";
    case "71N":return /BENE/.test(U)?"You pay the charges for this amendment.":/APPL/.test(U)?"The applicant pays the charges for this amendment.":"Who pays for this amendment.";
    case "48":m=/(\d{1,3})/.exec(U);return m?`Present documents within ${m[1]} days after shipment, and before expiry.`:"";
    case "49":return /WITHOUT/.test(U)?"No confirmation: you rely on the issuing bank.":/MAY ADD/.test(U)?"Your bank may add its confirmation if you ask.":/CONFIRM/.test(U)?"The advising bank is asked to confirm the credit.":"";
    case "58A":case "58D":return "The bank asked to add its confirmation.";
    case "53A":case "53D":return `The bank that will reimburse the paying or negotiating bank${/URR/.test(String(F["40E"]||"").toUpperCase())?", under URR 725":""}.`;
    case "78":return "Instructions to the nominated bank, such as where to send documents and how it will be reimbursed.";
    case "57A":case "57B":case "57D":return "The bank through which the credit is advised to you.";
    case "72Z":case "72":return "Information between the banks.";
    case "79":return "Free-text details of the amendment.";
  }
  return "";
}
function decSummary(P){
  const F=P.F,first=k=>esc((String(F[k]||"").split("\n")[0]||"").trim())||"–";const td=today0();const rows=[];
  const dd=(k,lbl)=>{const d=decDate(F[k]);if(!d)return;const n=dayDiff(td,d.d);rows.push([lbl,`${fmtD(d.d)}${d.rest&&k==="31D"?" · "+esc(d.rest):""}<small>${n===0?"today":n>0?"in "+n+" day"+(n>1?"s":""):(-n)+" day"+(n<-1?"s":"")+" ago"}</small>`]);};
  if(P.type==="707"){
    rows.push(["Credit number",first("20")]);if(F["26E"])rows.push(["Amendment number",esc(F["26E"])]);
    if(F["30"]){const d=decDate(F["30"]);if(d)rows.push(["Amendment date",fmtD(d.d)])}
    if(F["52A"]||F["52D"])rows.push(["Issuing bank",esc(String(F["52A"]||F["52D"]).split("\n")[0])]);
    const ch=P.order.filter(k=>!["27","20","21","23","52A","52D","50B","31C","26E","30","22A","72Z","72"].includes(k));
    rows.push(["Fields changed",ch.length?ch.map(k=>`<a href="#dfld-${k}" class="dec-tag" data-jump-f="${k}">${k}</a>`).join(" "):"None found"]);
    if(F["32B"])rows.push(["Increase",esc(decFmtAmt(decAmt(F["32B"])))]);if(F["33B"])rows.push(["Decrease",esc(decFmtAmt(decAmt(F["33B"])))]);
    dd("31D","New expiry");dd("44C","New latest shipment");
    return rows;
  }
  rows.push(["LC number",first("20")]);
  rows.push(["Form",esc(F["40A"]||"–")]);rows.push(["Rules",esc(F["40E"]||"–")]);
  rows.push(["Applicant (buyer)",first("50")]);rows.push(["Beneficiary (you)",first(F["59"]?"59":"59A")]);
  const a=decAmt(F["32B"]);const tm=/(\d{1,2})\s*\/\s*(\d{1,2})/.exec(String(F["39A"]||""));
  rows.push(["Amount",a?esc(decFmtAmt(a))+(tm?`<small>+${+tm[1]}% / −${+tm[2]}% tolerance</small>`:""):"–"]);
  const av=String(F["41A"]||F["41D"]||"").replace(/\n/g," ");rows.push(["Available",esc(av)||"–"]);
  rows.push(["Payment",esc(F["42C"]?String(F["42C"]).replace(/\n/g," "):(/DEF/.test(av.toUpperCase())?String(F["42P"]||"Deferred payment"):"–"))]);
  dd("31C","Issued");dd("44C","Latest shipment");if(F["44D"])rows.push(["Shipment period",esc(F["44D"])]);dd("31D","Expiry");
  const pm=/(\d{1,3})/.exec(String(F["48"]||""));rows.push(["Presentation period",pm?pm[1]+" days after shipment":"21 days (default)"]);
  rows.push(["Partial / transhipment",esc((F["43P"]||"–")+" / "+(F["43T"]||"–"))]);
  const route=[F["44A"],F["44E"]].filter(Boolean).join(" · ")+" → "+[F["44F"],F["44B"]].filter(Boolean).join(" · ");
  if(route.trim()!=="→")rows.push(["Route",esc(route.replace(/\n/g," "))]);
  const inc=decIncoterm(F);rows.push(["Incoterm",inc?esc(inc.term+(inc.place?" "+inc.place:"")+(inc.ver?" ("+inc.ver+")":"")):"Not found"]);
  rows.push(["Confirmation",esc(F["49"]||"–")]);rows.push(["Documents",decItems(F["46A"]).length+" required"]);
  return rows;
}
let DEC_LAST=null;
function decRender(raw){
  const P=decParse(raw);const box=$("dec-out");
  if(!P.order.length){box.hidden=false;box.innerHTML=`<div class="status warn">No SWIFT field tags found. Paste the full MT700 or MT707, including tags such as <code>:31D:</code> or <code>31D:</code> at the start of each field.</div>`;DEC_LAST=null;return;}
  DEC_LAST=P;const flags=decCheck(P);const F=P.F;
  const cnt=l=>flags.filter(f=>f.lvl===l).length;
  const LBL={red:"Red",amber:"Amber",info:"Info"};
  const flagHTML=flags.length?flags.map(f=>`<div class="dec-flag dec-${f.lvl}"><span class="dec-pill">${LBL[f.lvl]}</span><div><b>${esc(f.t)}</b><p>${f.d}</p>${f.f.length?`<p class="dec-fl">Field${f.f.length>1?"s":""} ${f.f.map(k=>`<a href="#dfld-${k}" class="dec-tag" data-jump-f="${k}">${k}</a>`).join(" ")}</p>`:""}</div></div>`).join(""):`<p class="muted">Nothing flagged.</p>`;
  const docSrc=P.type==="707"?[...String(F["46B"]||"").matchAll(/\/(ADD|DELETE|REPALL)\/([\s\S]*?)(?=\/(?:ADD|DELETE|REPALL)\/|$)/g)].filter(m=>m[1]!=="DELETE").map(m=>m[2].trim()).join("\n"):F["46A"];
  const docs=decItems(docSrc).map(decDoc);
  const docHTML=docs.length?docs.map((d,i)=>`<div class="dec-doc"><div class="dec-doc-h"><span class="dec-num">${i+1}</span><b>${esc(d.name)}</b>${d.art?`<span class="dec-art">${A_(d.art)}</span>`:""}</div>${d.hi.length?`<div class="dec-hi">${d.hi.map(h=>`<span>${esc(h)}</span>`).join("")}</div>`:""}<p class="dec-src">${esc(d.text)}</p><ul class="dec-chk">${(DOC_CHECKS[d.key]||DOC_CHECKS.other)().map(c=>`<li>${c}</li>`).join("")}</ul></div>`).join(""):"";
  const fmtVal=(k,v)=>/^(45B|46B|47B|49M|49N)$/.test(k)?esc(v).replace(/\/(ADD|DELETE|REPALL)\//g,(m,c)=>`<span class="dec-code dec-code-${c.toLowerCase()}">${{ADD:"Adds",DELETE:"Deletes",REPALL:"Replaces all with"}[c]}</span>`):esc(v);
  const fieldHTML=P.order.map(k=>`<div class="dec-row" id="dfld-${k}"><div class="dec-row-h"><span class="dec-tagbig">${k}</span><b>${esc(decName(k,P.type))}</b>${MT_GUIDE.has(k)&&P.type==="700"?`<button type="button" class="dec-guide" data-guide="${k}">Guide</button>`:""}</div><pre class="dec-val">${fmtVal(k,F[k])||"<i>(empty)</i>"}</pre>${(()=>{const m=decMeaning(k,F[k],P);return m?`<p class="dec-mean">${m}</p>`:""})()}</div>`).join("");
  const ex=decDate(F["31D"]),ls=decDate(F["44C"]);const pm=/(\d{1,3})/.exec(String(F["48"]||""));
  const canLC=P.type==="700"&&ex;
  box.hidden=false;
  box.innerHTML=`
  <div class="dec-head">
    <div><span class="dec-type">${P.type==="707"?"MT707 · Amendment to a documentary credit":"MT700 · Issue of a documentary credit"}</span>${P.merged?`<span class="dec-type dec-type-2">MT701 continuation merged</span>`:""}</div>
    <div class="dec-counts"><span class="dec-red">${cnt("red")} red</span><span class="dec-amber">${cnt("amber")} amber</span><span class="dec-info">${cnt("info")} info</span></div>
  </div>
  <div class="dec-actions no-print">
    <button type="button" class="btn" id="dec-ai">Get an AI prompt</button>
    ${canLC?`<button type="button" class="btn ghost" id="dec-lc">Check dates in the LC date calculator</button>`:""}
    <button type="button" class="btn ghost" id="dec-print">Print or save as PDF</button>
  </div>
  <div class="dec-ai-box no-print" id="dec-ai-box" hidden>
    <label class="dec-mask"><input type="checkbox" id="dec-mask" checked> Hide names, addresses, banks and the LC number (recommended)</label>
    <textarea id="dec-prompt" readonly rows="10" aria-label="AI prompt"></textarea>
    <div class="cta-row"><button type="button" class="btn" id="dec-copy">Copy prompt</button><span class="muted small" id="dec-copied" aria-live="polite"></span></div>
    <p class="muted small">Paste it into the AI assistant you use, such as ChatGPT, Claude or Gemini. Check your employer's policy before using an AI service with client documents. AI can be wrong: check anything important against UCP 600.</p>
  </div>
  <div class="dec-sec"><h2>${P.type==="707"?"The amendment at a glance":"The LC at a glance"}</h2><div class="dec-sum">${decSummary(P).map(r=>`<div><span>${r[0]}</span><b>${r[1]}</b></div>`).join("")}</div></div>
  <div class="dec-sec"><h2>Watch-outs</h2><div class="dec-flags">${flagHTML}</div></div>
  ${docHTML?`<div class="dec-sec"><h2>${P.type==="707"?"Documents added or replaced":"Document checklist"}</h2><p class="muted">${P.type==="707"?"New or replacement document requirements from field 46B.":"From field 46A. Tick through these before you present."}</p><div class="dec-docs">${docHTML}</div></div>`:""}
  <div class="dec-sec"><h2>Field by field</h2><div class="dec-fields">${fieldHTML}</div></div>
  <p class="muted small dec-note">Read automatically from the text you pasted, using fixed rules. It is an aid to reading the credit, not a document examination, and it can miss unusual wording. Check anything important with your bank.</p>`;
  if(canLC)$("dec-lc").addEventListener("click",()=>{const iso=x=>isoD(x);goRoute("tool-lc","#lc-"+(ls?iso(ls.d):"")+"_"+iso(ex.d)+"_"+(pm?pm[1]:"21"));});
  $("dec-print").addEventListener("click",()=>{try{window.print()}catch(_){}});
  $("dec-ai").addEventListener("click",()=>{const b=$("dec-ai-box");b.hidden=!b.hidden;if(!b.hidden)decPrompt();});
  $("dec-mask").addEventListener("change",decPrompt);
  $("dec-copy").addEventListener("click",()=>{const t=$("dec-prompt");const done=()=>{$("dec-copied").textContent="Copied."};
    try{navigator.clipboard.writeText(t.value).then(done,()=>{t.select();document.execCommand("copy");done()})}catch(_){t.select();try{document.execCommand("copy")}catch(__){};done()}});
  box._flags=flags;
  try{box.scrollIntoView({block:"start"})}catch(_){}
}
function decPrompt(){
  const P=DEC_LAST;if(!P)return;const mask=$("dec-mask").checked;const F=Object.assign({},P.F);
  if(mask){
    const nm=k=>(String(P.F[k]||"").split("\n")[0]||"").trim();
    const app=nm("50"),ben=nm("59")||nm("59A"),num=nm("20");
    const PH={"50":"[APPLICANT NAME AND ADDRESS]","59":"[BENEFICIARY NAME AND ADDRESS]","59A":"[BENEFICIARY]","20":"[LC NUMBER]","23":"[REFERENCE]","21":"[REFERENCE]"};
    ["51A","51D","52A","52D","53A","53D","57A","57B","57D","58A","58D","42A","42D","41A"].forEach(k=>PH[k]="[BANK]");
    Object.keys(F).forEach(k=>{if(PH[k])F[k]=PH[k];});
    if(P.F["41D"])F["41D"]=String(P.F["41D"]).replace(/^(?!ANY BANK)(.*)$/m,(m,l)=>/^BY\s/.test(l)?l:"[BANK]");
    if(P.F["42D"]&&/APPLICANT/i.test(P.F["42D"]))F["42D"]=P.F["42D"];
    const rep=(s,x,ph)=>x&&x.length>3?s.split(x).join(ph):s;
    Object.keys(F).forEach(k=>{if(!PH[k]){let s=String(F[k]);s=rep(s,app,"[APPLICANT]");s=rep(s,ben,"[BENEFICIARY]");s=rep(s,num,"[LC NUMBER]");F[k]=s;}});
  }
  const body=P.order.map(k=>`:${k}:${F[k]}`).join("\n");
  const flags=($("dec-out")._flags||[]).filter(f=>f.lvl!=="info").map(f=>`- [${f.lvl.toUpperCase()}] ${f.t}`).join("\n");
  const what=P.type==="707"?"SWIFT MT707 amendment to a documentary credit":"SWIFT MT700 documentary credit (letter of credit)";
  $("dec-prompt").value=`You are an experienced trade finance specialist. Review the following ${what} from the point of view of the exporter (the beneficiary).${F["40E"]?` It is subject to: ${String(F["40E"]).split("\n")[0]}.`:""}

Please:
1. Summarise the key terms in plain English.
2. Identify any soft clauses, non-documentary conditions, or terms that give the applicant control over payment.
3. Check consistency between the Incoterm, the documents required and the shipment details.
4. Check the dates: issue, latest shipment, presentation period and expiry.
5. List each document required and what the exporter must check before presenting.${P.type==="707"?"\n6. Explain what this amendment changes, and whether the exporter should accept it.":"\n6. Flag anything unusual compared with standard practice under UCP 600 and ISBP 821."}
Cite the UCP 600 article or ISBP 821 paragraph for each point, and say clearly when you are unsure.
${flags?`\nAn automated rule-based check has already flagged:\n${flags}\nConfirm or correct these, and look for anything it missed.\n`:""}
${P.type==="707"?"Amendment":"LC"} text:
<<<
${body}
>>>`;
}
function goRoute(r,h){
  const live=!!document.documentElement.dataset.page;
  if(live){if(r===curPage()){if(h){try{history.replaceState(null,"",h)}catch(_){};applyHash(h)}}else location.href=(r==="home"?"/":"/"+r)+(h||"");return}
  show(r);try{history.replaceState(null,"","#"+r)}catch(_){};if(h)setTimeout(()=>applyHash(h),80);
}
const DEC_SAMPLES={
 sight:`:27:1/1
:40A:IRREVOCABLE
:20:DC-SAMPLE-1001
:31C:{0}
:40E:UCP LATEST VERSION
:31D:{75}INDIA
:50:ALPHA TRADING LLC
P.O. BOX 1234, DUBAI, UAE
:59:SAMPLE EXPORTS PVT LTD
INDUSTRIAL AREA, LUDHIANA, INDIA
:32B:USD48000,00
:39A:05/05
:41D:ANY BANK IN INDIA
BY NEGOTIATION
:42C:AT SIGHT
:42D:GULF SAMPLE BANK PSC, DUBAI
:43P:ALLOWED
:43T:ALLOWED
:44E:ANY SEAPORT IN INDIA
:44F:JEBEL ALI PORT, UAE
:44C:{45}
:45A:READYMADE COTTON T-SHIRTS, 100 PCT COTTON, ASSORTED SIZES,
12,000 PCS AT USD 4.00 PER PC
CIF JEBEL ALI, UAE INCOTERMS 2020
:46A:+SIGNED COMMERCIAL INVOICE IN 3 ORIGINALS SHOWING THE CREDIT NUMBER.
+FULL SET OF CLEAN ON BOARD OCEAN BILLS OF LADING MADE OUT TO THE ORDER OF GULF SAMPLE BANK PSC, MARKED FREIGHT PREPAID AND NOTIFY APPLICANT.
+INSURANCE CERTIFICATE IN DUPLICATE, BLANK ENDORSED, FOR 110 PCT OF CIF VALUE, COVERING INSTITUTE CARGO CLAUSES (A).
+PACKING LIST IN 3 COPIES.
+CERTIFICATE OF ORIGIN ISSUED BY A CHAMBER OF COMMERCE IN INDIA.
:47A:+ALL DOCUMENTS MUST SHOW THIS CREDIT NUMBER.
+THIRD PARTY DOCUMENTS EXCEPT DRAFT AND INVOICE ARE ACCEPTABLE.
+A DISCREPANCY FEE OF USD 75.00 WILL BE DEDUCTED FROM THE PROCEEDS OF EACH DISCREPANT PRESENTATION.
:71D:ALL BANKING CHARGES OUTSIDE UAE ARE FOR BENEFICIARY'S ACCOUNT.
:48:21/FROM THE DATE OF SHIPMENT
:49:WITHOUT
:78:ON RECEIPT OF COMPLYING DOCUMENTS AT OUR COUNTERS WE SHALL REMIT THE PROCEEDS AS PER YOUR INSTRUCTIONS.`,
 usance:`:27:1/1
:40A:IRREVOCABLE
:20:DC-SAMPLE-2002
:31C:{0}
:40E:UCP LATEST VERSION
:31D:{60}QATAR
:50:BETA FOODS TRADING CO
DOHA, QATAR
:59:SAMPLE AGRO OVERSEAS
G.T. ROAD, PANIPAT, INDIA
:32B:USD220000,00
:41D:ANY BANK
BY NEGOTIATION
:42C:AT 90 DAYS FROM BILL OF LADING DATE
:42D:QATAR SAMPLE BANK QPSC
:43P:ALLOWED
:43T:NOT ALLOWED
:44E:NHAVA SHEVA, INDIA
:44F:HAMAD PORT, QATAR
:44C:{40}
:45A:ABOUT 200 METRIC TONNES INDIAN BASMATI RICE, CROP 2026, IN 25 KG BAGS,
AT USD 1,100 PER MT, FOB NHAVA SHEVA INCOTERMS 2020
:46A:1. SIGNED COMMERCIAL INVOICE IN TRIPLICATE.
2. FULL SET OF CLEAN SHIPPED ON BOARD BILLS OF LADING MADE OUT TO THE ORDER OF QATAR SAMPLE BANK QPSC, MARKED FREIGHT COLLECT AND NOTIFY APPLICANT.
3. PHYTOSANITARY CERTIFICATE ISSUED BY THE COMPETENT AUTHORITY IN INDIA.
4. FUMIGATION CERTIFICATE.
5. CERTIFICATE OF ORIGIN LEGALISED BY THE EMBASSY OF QATAR IN NEW DELHI.
6. PACKING LIST AND WEIGHT LIST IN 3 COPIES EACH.
:47A:1. USANCE INTEREST AND DISCOUNT CHARGES ARE FOR THE APPLICANT'S ACCOUNT.
2. ALL DOCUMENTS MUST BEAR THE LC NUMBER.
3. INSURANCE IS COVERED BY THE APPLICANT.
:71D:ALL CHARGES OUTSIDE QATAR ARE FOR BENEFICIARY'S ACCOUNT.
:49:MAY ADD`,
 risky:`:27:1/1
:40A:IRREVOCABLE
:20:DC-SAMPLE-3003
:31C:{0}
:40E:UCP LATEST VERSION
:31D:{37}AT THE COUNTERS OF THE ISSUING BANK
:50:OMEGA IMPEX FZE
SAIF ZONE, SHARJAH, UAE
:59:SAMPLE SPICES EXPORTS
MARKET YARD, PUNE, INDIA
:32B:USD95000,00
:41D:ISSUING BANK
BY PAYMENT
:42C:AT SIGHT
:42D:OMEGA IMPEX FZE
:43P:NOT ALLOWED
:43T:ALLOWED
:44E:MUNDRA, INDIA
:44F:SHARJAH, UAE
:44C:{30}
:45A:INDIAN RED CHILLI WHOLE, 50 MT AT USD 1,900 PER MT
CFR SHARJAH
:46A:+SIGNED COMMERCIAL INVOICE IN 4 ORIGINALS.
+2/3 SET OF CLEAN ON BOARD BILLS OF LADING MADE OUT TO ORDER, BLANK ENDORSED, MARKED FREIGHT COLLECT.
+INSURANCE POLICY FOR 110 PCT OF INVOICE VALUE.
+INSPECTION CERTIFICATE SIGNED BY THE APPLICANT'S REPRESENTATIVE CERTIFYING QUALITY.
+PACKING LIST.
:47A:+1/3 ORIGINAL BILL OF LADING TO BE SENT DIRECTLY TO THE APPLICANT BY COURIER.
+NAME OF VESSEL AND SHIPPING LINE WILL BE ADVISED BY AN AMENDMENT.
+SHIPMENT IN TWO LOTS.
+GOODS MUST BE OF INDIAN ORIGIN.
+DISCREPANCY FEE USD 150.00 PER SET.
:71D:ALL BANKING CHARGES ARE FOR BENEFICIARY'S ACCOUNT.
:48:7 DAYS
:49:WITHOUT`,
 amend:`:27:1/1
:20:DC-SAMPLE-1001
:21:NONREF
:23:DC-SAMPLE-1001
:52D:GULF SAMPLE BANK PSC, DUBAI
:31C:{-20}
:26E:01
:30:{0}
:22A:ISSU
:32B:USD6000,00
:31D:{95}INDIA
:44C:{60}
:45B:/REPALL/READYMADE COTTON T-SHIRTS, 100 PCT COTTON, ASSORTED SIZES,
13,500 PCS AT USD 4.00 PER PC
CIF JEBEL ALI, UAE INCOTERMS 2020
:46B:/ADD/+INSPECTION CERTIFICATE ISSUED BY ANY INTERNATIONAL INSPECTION AGENCY CERTIFYING QUALITY AND QUANTITY.
:47B:/DELETE/+THIRD PARTY DOCUMENTS EXCEPT DRAFT AND INVOICE ARE ACCEPTABLE.
/ADD/+THIS AMENDMENT IS DEEMED ACCEPTED UNLESS REJECTED BY THE BENEFICIARY WITHIN 5 DAYS.
:71N:BENE`
};
function decSample(k){
  const td=today0();
  return DEC_SAMPLES[k].replace(/\{(-?\d+)\}/g,(m,n)=>{const d=addDays(td,+n);return String(d.getFullYear()).slice(2)+String(d.getMonth()+1).padStart(2,"0")+String(d.getDate()).padStart(2,"0")});
}
(function(){
  const ta=$("dec-in");if(!(ta instanceof HTMLTextAreaElement)||!$("dec-go").addEventListener)return;
  $("dec-go").addEventListener("click",()=>decRender(ta.value));
  $("dec-clear").addEventListener("click",()=>{ta.value="";const o=$("dec-out");o.hidden=true;o.innerHTML="";ta.focus();});
  $("dec-samples").addEventListener("click",e=>{const b=e.target.closest("[data-sample]");if(!b)return;ta.value=decSample(b.dataset.sample);decRender(ta.value);});
  $("dec-out").addEventListener("click",e=>{
    const j=e.target.closest("[data-jump-f]");if(j){e.preventDefault();const r=$("dfld-"+j.dataset.jumpF);if(r.scrollIntoView){try{r.scrollIntoView({block:"center"})}catch(_){};flash(r);}return;}
    const g=e.target.closest("[data-guide]");if(g){goRoute("ucp-600","#find-"+g.dataset.guide);}
  });
})();

/* ---------- start ---------- */
const start=document.documentElement.dataset.page||"home";
show(start);
if(/^#(art|find|lc)-/.test(location.hash))setTimeout(()=>applyHash(location.hash),60);
})();

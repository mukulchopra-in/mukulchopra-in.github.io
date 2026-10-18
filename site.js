
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
 ["14","Standard for examination of documents","exam","Banks examine documents alone to decide whether they appear to comply. Each bank has up to five banking days after the day of presentation. Original transport documents must be presented within 21 calendar days of shipment, and never after expiry. Data need not be identical across documents but must not conflict. Outside the invoice, goods may be described in general terms. Documents not called for are disregarded, and conditions with no stated document are ignored. Addresses need not match the credit exactly but must be in the same country. The shipper need not be the beneficiary."],
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
 ["21","calendar days","Default presentation period after shipment, if the credit is silent","Art. 14(c)"],
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
 ["Goods description on the invoice","Field 45A of the LC reads '100% cotton men's shirts, sizes M to XL'. The commercial invoice describes the goods as 'Cotton shirts'. The bill of lading says 'Shirts'.","Discrepant",'The invoice must correspond with the credit\'s description, and "Cotton shirts" leaves out details the LC requires. The bill of lading is fine: documents other than the invoice may describe goods in general terms, as long as they do not conflict. See Art. 18 and Art. 14.'],
 ["Presentation after 21 days","The LC expires on 30 April and states no presentation period. The bill of lading shows shipment on board on 2 March. Documents are presented on 28 March.","Discrepant","With no stated period, original transport documents must be presented within 21 calendar days after shipment, which here ends on 23 March. The expiry date being later does not help. See Art. 14."],
 ["Refusal on the sixth banking day","Documents reach the issuing bank, which finds a genuine discrepancy. It sends its refusal notice at the close of the sixth banking day following the day of presentation.","Bank must pay","A refusal must be given by the close of the fifth banking day following the day of presentation. A late notice means the bank loses the right to claim the documents do not comply. See Art. 16."],
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
 ["40E","Applicable rules","Should say UCP latest version. If it names other rules, read the credit with those in mind."],
 ["31D","Date and place of expiry","Documents must reach the place named here by this date. An expiry at the issuing bank abroad leaves you less time than one in your own country."],
 ["32B","Currency and amount","The invoice and draft cannot exceed this, beyond any tolerance in 39A."],
 ["39A","Amount tolerance","For example 10/10 allows 10% more or less. If blank, only the Art. 30 rules apply."],
 ["41a","Available with … by …","Which bank pays or negotiates, and whether by sight payment, deferred payment, acceptance or negotiation."],
 ["42C","Drafts at","The tenor of the draft: at sight, or a number of days after sight or shipment. Draft wording must match."],
 ["43P / 43T","Partial shipments and transhipment","Allowed or not allowed. Plan your shipping before agreeing to 'not allowed'."],
 ["44E / 44F","Ports of loading and discharge","The transport document must show these ports as named. A different port is a discrepancy."],
 ["44C","Latest date of shipment","The on-board date cannot be later than this. Unlike the expiry date, it is not extended for a bank holiday."],
 ["45A","Description of goods","Copy this into the invoice word for word. Other documents may use a general description that does not conflict."],
 ["46A","Documents required","List every document, the number of originals and copies, and who must issue or sign each one."],
 ["47A","Additional conditions","Where most surprises sit. A condition with no document to show compliance is disregarded, but every documentary condition must be met."],
 ["71D","Charges","Who pays bank charges outside the issuing bank. Factor these into your price."],
 ["48","Period for presentation","Days after shipment to present documents. If blank, 21 calendar days apply, always within expiry."],
 ["49","Confirmation instructions","CONFIRM, MAY ADD or WITHOUT. If you need confirmation, arrange it before you ship."]
];
const TIPS=[
 ["Read the LC the day it arrives","Ask for amendments before shipment, when the buyer still has a reason to agree."],
 ["Work backwards from three dates","Latest shipment (44C), presentation period (48) and expiry (31D). The earliest limit is the one that counts."],
 ["Copy the goods description exactly","The invoice must match 45A. Paraphrasing is one of the most common reasons for refusal."],
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
const $=id=>document.getElementById(id);

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
$("case-list").innerHTML=CASES.map((c,i)=>`<div class="case"><span class="ref">Case ${i+1}</span><h3>${esc(c[0])}</h3><p>${esc(c[1])}</p><p class="case-q">Discrepant or not?</p><details class="reveal"><summary>Show the answer</summary><div class="ans"><span class="verdict ${c[2]==="Discrepant"?"v-bad":"v-ok"}">${esc(c[2])}</span><p class="muted">${artify(esc(c[3]))}</p></div></details></div>`).join("");
$("isbp-pts").innerHTML=ptsHTML(ISBP);$("urdg-pts").innerHTML=ptsHTML(URDG);$("urc-pts").innerHTML=ptsHTML(URC);$("urr-pts").innerHTML=ptsHTML(URR);
$("inco-docs").innerHTML=INCO.map(r=>`<tr><td class="term">${r[0]}<div class="muted" style="font-family:var(--body);font-weight:400;font-size:.82rem">${esc(r[1])}</div></td><td>${esc(r[3])}</td><td>${r[4]}</td><td>${esc(r[5])}</td><td>${esc(INCO_DOCS[r[0]])}</td></tr>`).join("");

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
const TOOL_SUB=["tool-emi", "tool-elig", "tool-prepay", "tool-lc", "tool-usance", "tool-sip", "tool-fd", "tool-cmp"];
const PAGES=["home","trade-finance","ucp-600","isbp-821","urdg-758","urc-522","urr-725","incoterms","isp98","eucp","case-studies","glossary","tools",...TOOL_SUB,"blog","contact"];
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
 "tool-emi":["EMI calculator","Home loan EMI with total interest and a year-wise repayment schedule."],
 "tool-elig":["Home loan eligibility calculator","Estimate how much home loan your income can support."],
 "tool-prepay":["Home loan prepayment calculator","Interest saved and tenure reduced by a lump-sum prepayment."],
 "tool-lc":["LC date calculator","Last day for presentation, examination deadline and shipment date check under UCP 600, with Indian bank holidays."],
 "tool-usance":["Usance bill maturity calculator","Maturity date of a usance draft, adjusted for bank holidays."],
 "tool-sip":["SIP calculator","Estimated value of a monthly SIP."],
 "tool-fd":["Fixed deposit calculator","FD maturity value with quarterly compounding."],
 "tool-cmp":["Compare loan offers","Compare two loan offers by EMI and total cost including fees."],
 "blog":["Blog","Practical writing on trade finance, home loans and personal finance. Coming soon."],
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
    const navPage=TF_SUB.includes(page)?"trade-finance":TOOL_SUB.includes(page)?"tools":page;
    if(a.dataset.route===navPage)a.setAttribute("aria-current","page");else a.removeAttribute("aria-current");
  });
  setMeta(page);
  if(page==="tool-emi"&&window._emiYrs)drawEMIChart(window._emiYrs);
  toTop(page);
}
const hdr=document.querySelector("header.site"),mbtn=$("menu-btn");
function setMenu(open){hdr.classList.toggle("open",open);mbtn.setAttribute("aria-expanded",open);mbtn.setAttribute("aria-label",open?"Close menu":"Open menu");}
mbtn.addEventListener("click",e=>{e.stopPropagation();setMenu(!hdr.classList.contains("open"))});
function onRoute(e){
  const a=e.target.closest&&e.target.closest("[data-route]");
  if(!a)return;
  e.preventDefault();e.stopPropagation();
  setMenu(false);
  const r=a.dataset.route;
  try{history.replaceState(null,"","#"+r)}catch(_){}
  show(r,{tool:a.dataset.tool});
}
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
  const raw=addDays(ship,per);const usingExp=exp<raw;let last=usingExp?exp:raw;
  let ext=last;while(closed(ext,rule,hol))ext=addDays(ext,1);
  $("lc-raw").textContent=fmtD(raw);
  $("lc-which").textContent=usingExp?"LC expiry comes first":"Presentation period comes first";
  $("lc-last").textContent=fmtD(ext);
  let msgs=[];
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

/* ---------- start ---------- */
const start=document.documentElement.dataset.page||"home";
show(start);
const mA=/^#art-(\d{1,2})$/.exec(location.hash);if(start==="ucp-600"&&mA)setTimeout(()=>openArticle(mA[1]),60);
})();

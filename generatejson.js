window.addEventListener("load", () => {
  let div = document.getElementById("res");
  
  let resQ = text.match(/(?<=QUESTION [0-9]\n|QUESTION [0-9][0-9]\n)(.|\n)*?(?=(A\.|NOTE))/gm);
  let resA = text.match(/(?=A\.)(.|\n)*?(?=Correct)/gm);
  let resC = text.match(/(?<=Correct Answer: ).*?(?=\n)/gm);
  
  div.innerHTML = '{<br>&nbsp;&nbsp;"title": "",<br>&nbsp;&nbsp;"form": [';
  resQ.forEach((elmt, index) => {
  div.innerHTML += '<br>&nbsp;&nbsp;&nbsp;&nbsp;{';
  	div.innerHTML += '<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"question": "'+elmt+'",';
    let answers = resA[index];
    answers = answers.replace(/^[ABCDE]\. /gm, "");
    /*answers = answers.replace("A. ", "");
    answers = answers.replace("B. ", "");
    answers = answers.replace("C. ", "");
    answers = answers.replace("D. ", "");
    answers = answers.replace("E. ", "");*/
    answers = answers.split("\n");
    answers.pop();
    div.innerHTML += '<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"answers": [';
    answers.forEach((a, i) => {
    	if(i < answers.length-1) {
	      div.innerHTML += '<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"'+a+'",';
      } else {
	      div.innerHTML += '<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"'+a+'"';
      }
    });
    div.innerHTML += '<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;],';
    let correct = resC[index];
    correct = correct.replace("A", "0");
    correct = correct.replace("B", "1");
    correct = correct.replace("C", "2");
    correct = correct.replace("D", "3");
    correct = correct.replace("E", "4");
    correct = correct.split("");
    div.innerHTML += '<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"correct": [';
    correct.forEach((c, i) => {
    	if(i < correct.length-1) {
      	div.innerHTML += c+', ';
      } else {
      	div.innerHTML += c;
      }
    });
    div.innerHTML += ']';
    if(index < resQ.length-1) {
    	div.innerHTML += '<br>&nbsp;&nbsp;&nbsp;&nbsp;},';
    } else {
    	div.innerHTML += '<br>&nbsp;&nbsp;&nbsp;&nbsp;}';
    }
  });
  div.innerHTML += '<br>&nbsp;&nbsp;]';
  div.innerHTML += "<br>}";
});


const text = `xam A
QUESTION 1
Which two components are included in Dynamics 365 Marketing? Each correct answer presents a
complete solution.
NOTE: Each correct selection is worth one point.
A. Customer Voice survey
B. Customer Service Hub
C. Enterprise Asset Management
D. Event management
Correct Answer: AD
Explanation
Explanation/Reference:
Reference:
https://docs.microsoft.com/en-gb/dynamics365/marketing/overview
QUESTION 2
A company integrates LinkedIn Campaign Manager with Dynamics 365 Marketing.
Which two actions can the company perform using out-of-the-box features? Each correct answer presents
a complete solution.
NOTE: Each correct selection is worth one point.
A. Generate leads from LinkedIn.
B. Create email templates for LinkedIn messages.
C. Schedule and publish social posts.
D. Create and publish events on LinkedIn.
Correct Answer: AC
Explanation
Explanation/Reference:
Reference:
https://seelogic.co.uk/technologies/dynamics-365/marketing-on-linkedin-with-dynamics-365-marketing/
QUESTION 3
A company organizes and runs conferences and other events. The company is considering using
Dynamics 365 Marketing.
The company wants to ensure that they can implement key marketing features without requiring any
customizations.
Which three capabilities does Dynamics 365 Marketing support using out-of-the-box functionality? Each
correct answer presents part of the solution.
NOTE: Each correct selection is worth one point.
A. Sponsors and sponsorships
B. Regulatory compliance
C. Advertisers and print media and campaigns
D. Session and speaker tracking
E. Registration and attendance
Correct Answer: ADE
Explanation
Explanation/Reference:
Reference:
https://docs.microsoft.com/en-gb/dynamics365/marketing/manage-event-sponsorships
https://docs.microsoft.com/en-gb/dynamics365/marketing/event-management
https://docs.microsoft.com/en-gb/dynamics365/marketing/event-management
QUESTION 4
A potential customer delays their decision to commit to a big multi-year contract.
You want to find other colleagues who have interacted with the potential customer to discuss strategies.
Which app should you recommend?
A. Customer Service Insights
B. Market Insights
C. Power Virtual Agents
D. Sales Insights
Correct Answer: D
Explanation
Explanation/Reference:
Reference:
https://docs.microsoft.com/en-us/dynamics365/ai/sales/relationship-analytics#analyze-the-health-andactivity-history-of-a-customer-or-opportunity
QUESTION 5
A company uses Dynamics 365 Sales.
You need to create a forecast in Dynamics 365 Sales so that the sales director will be able to predict
upcoming sales revenue.
Which standard record type is used to create the forecast?
A. Account
B. Lead
C. Quote
D. Opportunity
Correct Answer: D
Explanation
Explanation/Reference:
Reference:
https://docs.microsoft.com/en-us/dynamics365/sales-enterprise/configure-forecast
QUESTION 6
Your company uses Dynamics 365 Sales.
You need to prepare and send a quote to a customer.
What are two possible ways to achieve the goal?
NOTE: Each correct selection is worth one point.
A. Close the quote
B. Generate a document by using a Microsoft Word template.
C. Export the quote as a PDF file.
D. Create an order
Correct Answer: BC
Explanation
Explanation/Reference:
Reference:
https://www.crmsoftwareblog.com/2019/09/creating-pdf-quotes-in-dynamics-365/
QUESTION 7
A customer needs a cost-effective sales solution that can display current news about a lead or an account.
You recommend Microsoft Relationship Sales.
Which two products are included in Microsoft Relationship Sales? Each correct answer presents part of the
solution.
NOTE: Each correct selection is worth one point.
A. Dynamics 365 Customer Insights
B. Dynamics 365 Sales Enterprise
C. Dynamics 365 Sales Insights
D. LinkedIn Sales Navigator
Correct Answer: BD
Explanation
Explanation/Reference:
Reference:
https://docs.microsoft.com/en-us/learn/modules/value-proposition-mrss/1-intro
QUESTION 8
You are a sales representative for a company.
Which Dynamics 365 Sales can you use to manage the sales pipeline?
A. Turning leads into opportunities
B. Tracking the asset history of a customer
C. Resolving an open case of a customer
D. Tracking service level agreements
Correct Answer: A
Explanation
Explanation/Reference:
Reference:
https://docs.microsoft.com/en-us/dynamics365/sales-professional/manage-leads-sales-professional
QUESTION 9
A company plans to implement Dynamics 365 Sales.
Which two out-of-the-box features can you use to capture leads? Each correct answer presents a
complete solution.
NOTE: Each correct selection is worth one point.
A. emails
B. CSV files
C. Dynamics 365 Commerce
D. Dynamics 365 Customer Insights
Correct Answer: AB
Explanation
Explanation/Reference:
Reference:
https://www.dyn365pros.com/2015/11/11/microsoft-dynamics-crm-4-simple-steps-for-importing-leads-andcontacts/
QUESTION 10
A company wants to be able to give quotes to customers from their parts list.
You need to recommend a solution for the company.
What should you recommend?
A. Dynamics 356 Customer Insights
B. Dynamics 365 Sales
C. Dynamics 365 Marketing
D. Dynamics 365 Human Resources
Correct Answer: B
Explanation
Explanation/Reference:
Reference:
https://docs.microsoft.com/en-us/dynamics365/sales-enterprise/create-edit-quote-sales
QUESTION 11
You work as a technician and receive your work assignments by using cases in Dynamics 365 Sales.
You need to review the timeline for a case that you are managing.
Which type of activity appears in the case timeline?
A. Project task
B. Task
C. Entitlement
D. Work order
Correct Answer: C
Explanation
Explanation/Reference:
Reference:
https://docs.microsoft.com/en-us/dynamics365/customer-service/customer-service-hub-user-guide-createa-case
QUESTION 12
A company uses Dynamics 365 Customer Service.
The company plans to use support queues to organize and monitor the progress of cases. Customer
support agents will select cases from queues in which they are members. Agents release case items if
they are not able to continue working on a case.
Which statement describes what happens when a case item is released from the queue?
A. The case continues to remain in the agent's personal queue until someone else selects the item from
the queue.
B. The case is removed from all queues.
C. The case is removed from the agent's personal queue and returned to the original support queue.
Correct Answer: C
Explanation
Explanation/Reference:
Reference:
https://docs.microsoft.com/en-us/learn/modules/using-dynamics-365-queues-to-manage-caseworkloads/4-working-with-queues
QUESTION 13
You attend a tradeshow. A fellow attendee suggests that you implement Dynamics 365 Connected
Customer Service.
What is a valid use case for Dynamics 365 Connected Customer Service?
A. Analyze customer sentiment from multiple sources.
B. Respond to and resolve customer issues by using social media.
C. Use mixed reality applications to assist technicians performing work in the field.
D. Use IoT devices and AI to predict when a customer's equipment will need service.
Correct Answer: D
Explanation
Explanation/Reference:
Reference:
https://docs.microsoft.com/en-us/dynamics365/customer-service/cs-iot-overview
QUESTION 14
You manage a call center for a company that uses Dynamics 365 Customer Service.
The call center's customer service manager wants to renew all expired entitlements to increase the
duration of entitlements from six months to one year.
You need to help the customer service manager make the changes.
Which status indicates that an entitlement must be renewed?
A. Draft
B. Waiting
C. Active
D. Canceled
Correct Answer: D
Explanation
Explanation/Reference:
Reference:
https://docs.microsoft.com/en-us/dynamics365/customer-service/create-entitlement-define-support-termscustomer#renew-an-entitlement
QUESTION 15
A company plans to implement Dynamics 365 Customer Service.
The company wants to use the system to determine when customers are having an issue and need help.
You need to track customer issues until the issues are resolved.
What should you create?
A. opportunity
B. contact
C. case
D. quote
Correct Answer: C
Explanation
Explanation/Reference:
Reference:
https://docs.microsoft.com/en-gb/learn/modules/get-started-with-dynamics-365-for-customer-service/2-
core-components
QUESTION 16
A company uses Dynamics 365 Customer Service. The customer service department for a retailer hires
temporary employees to work during peak seasons.
Temporary employees take much longer to resolve cases than seasoned employees.
You need to recommend features that will help employees find information needed to resolve cases.
Which two options should you recommend? Each correct answer presents a complete solution.
NOTE: Each correct selection is worth one point.
A. Knowledge base with Relevance search
B. Parent and Child case settings
C. Case management with Related Similar cases
D. Routing rule sets
Correct Answer: AC
Explanation
Explanation/Reference:
Reference:
https://docs.microsoft.com/en-us/dynamics365/customer-service/suggest-similar-cases-for-a-case
QUESTION 17
A company uses Dynamics 365 Field Service.
You create a work order from a case. A field service administrator schedules the work order.
A technician arrives at the site of the work order and is ready to begin work on time.
What is the status of the work order?
A. Open – In progress
B. Open – Unscheduled
C. Traveling
D. Open – Scheduled
Correct Answer: A
Explanation
Explanation/Reference:
Reference:
https://docs.microsoft.com/en-us/dynamics365/field-service/work-order-status-booking-status
QUESTION 18
An air conditioning company uses Dynamics 365 Field Service.
When a problem is detected with a customer's air conditioning system, a new case must be opened
automatically.
You need to recommend a solution for the company.
What should you recommend?
A. Field Service Mobile
B. Work orders
C. Connected Field Service
D. Universal Resource Scheduling
E. Case management
Correct Answer: C
Explanation
Explanation/Reference:
Reference:
https://docs.microsoft.com/en-us/dynamics365/field-service/connected-field-service
QUESTION 19
A company sells and services clothing washing machines and dryers. The company uses Dynamics 365
Field Service.
You need to proactively monitor customer's equipment to identify problems and maintenance needs.
Which two Connected Field Service options can you use?
Each correct answer presents a complete solution.
NOTE: Each correct selection is worth one point.
A. Dynamics 365 Remote Assist integration
B. Dynamics 365 mobile app
C. Azure IoT Central
D. Azure IoT Hub
Correct Answer: CD
Explanation
Explanation/Reference:
Reference:
https://docs.microsoft.com/en-us/dynamics365/field-service/connected-field-service
QUESTION 20
A company uses Dynamics 365 Field Service.
The maintenance manager wants to be able to add a list of questions to work orders to ensure that field
technicians follow the same steps when servicing customer equipment.
You need to explain to the manager which features are available to meet the requirement.
Which feature should you use?
A. Connected Field Service
B. Inspections
C. Microsoft Customer Voice
D. Scheduling
Correct Answer: B
Explanation
Explanation/Reference:
Reference:
https://docs.microsoft.com/en-us/dynamics365/field-service/inspections
QUESTION 21
You use Dynamics 365 Field Service.
Each time a customer contacts a call center to request service, you plan to send a technician to the
customer's location. You receive a service request and create a work order.
You need to identify the next step in the process.
What should you do next?
A. Adjust inventory values.
B. Schedule and dispatch the work order.
C. Generate an invoice.
D. Review and close the work order.
Correct Answer: B
Explanation
Explanation/Reference:
Reference:
https://docs.microsoft.com/en-us/dynamics365/field-service/create-work-order
QUESTION 22
You work for a job placement agency that uses Dynamics 365 Project Operations.
A client needs an expert plumber to handle an emergency situation at their office.
You need to identify an expert plumber for the client.
What are two possible ways to achieve this goal?
Each correct answer presents a complete solution.
NOTE: Each correct selection is worth one point.
A. Open the Resource Manager Dashboard and filter Role Utilization by the term expert plumber.
B. Open the client's project Gantt chart and filter by the term expert plumber.
C. Open the Resource Utilization board and filter by the term expert plumber.
D. Open the Schedule board and filter by the term expert plumber.
Correct Answer: CD
Explanation
Explanation/Reference:
Reference:
https://docs.microsoft.com/en-us/dynamics365/project-operations/psa/view-resource-utilization
QUESTION 23
You are the resource manager for an electrical contractor that uses Dynamics 365 Project Operations.
You need to track information about electricians' qualifications professional licenses, and certifications.
Which attribute should you use?
A. Skills
B. Roles
C. Rating values
Correct Answer: A
Explanation
Explanation/Reference:
Reference:
https://docs.microsoft.com/en-us/dynamics365/project-operations/resource-management/skills-proficiencymodels
QUESTION 24
A company plans to implement Dynamics 365 Project Operations.
Which two billing methods does Dynamics 365 Project Operations support?
Each correct answer presents a complete solution.
NOTE: Each correct selection is worth one point.
A. Time and Material
B. Fixed Price
C. Expense
D. Not-to-exceed Limit
Correct Answer: AB
Explanation
Explanation/Reference:
Reference:
https://docs.microsoft.com/en-us/dynamics365/project-operations/sales/manage-contract-values-projectbased
QUESTION 25
A company sells and services commercial refrigeration equipment. The company is implementing
Dynamics 365 Project Operations.
You need to ensure that you can select a service technician for an assignment that has the required
expertise to address the equipment issues reported by a customer.
Which two features should you use? Each correct answer presents part of the solution.
NOTE: Each correct selection is worth one point.
A. Resource skills
B. Resource roles
C. Proficiency models
D. Service-level agreements
Correct Answer: AC
Explanation
Explanation/Reference:
Reference:
https://docs.microsoft.com/en-us/dynamics365/project-operations/psa/resource-management-skillsproficiency
QUESTION 26
All employees at a company work eight hours each day Monday through Friday. A resource named
Resource1 has 40 hours available for a specific week.
You need to schedule Resource1 to work on a project during that week. The resource must work the hours
detailed below:
Which allocation method should you use?
A. Remaining capacity
B. Percentage capacity
C. Full capacity
D. Front-load hours
Correct Answer: D
Explanation
Explanation/Reference:
You would have to create separate bookings for each of the working days.
Reference:
https://docs.microsoft.com/en-us/dynamics365/project-operations/psa/faq-allocation-methods
QUESTION 27
You have a chart that displays a summary of accounts by industry.
You need a chart that displays the same data grouped by city. You must be able to access the chart at a
later date.
What are two possible ways to achieve this goal? Each correct answer presents a complete solution.
NOTE: Each correct selection is worth one point.
A. Expand the existing chart.
B. Edit the existing chart.
C. Select the city field in the drill-down menu.
D. Create a new chart.
Correct Answer: BD
Explanation
QUESTION 28
A company is considering implementing products and the product catalog in Dynamics 365 Sales.
Sales transactions can occur in multiple currencies. The company wants to manage exchange rates.
You need to explain to the company how Dynamics 365 Sales handles currency.
Which two statements describe how Dynamics 365 Sales handles currency? Each correct answer
presents part of the solution.
NOTE: Each correct selection is worth one point.
A. By default, all available currencies can be used.
B. By default, a base currency is available and other currencies can be added as needed.
C. Exchange rates are automatically updated.
D. Exchange rates need to be updated manually.
Correct Answer: BD
Explanation
Explanation/Reference:
Reference:
https://themscrmexpert.wordpress.com/2016/12/29/understanding-organizations-base-currency-indynamics-365-crm/
QUESTION 29
A company uses Dynamics 365 Sales.
You need to analyze account data and create reports based on the analyses.
Which solution should you use?
A. Microsoft Forms Pro
B. Power BI
C. Power Automate
D. Management Reporter
Correct Answer: B
Explanation
Explanation/Reference:
Reference:
https://docs.microsoft.com/en-us/dynamics365/sales-enterprise/introduction-sales-template-apps
QUESTION 30
You are a sales representative for a company that sells furniture. You collaborate with an engineering team
and a design team to support customer proposals.
The latest versions of all proposals must be available to both teams. Team members must be able to edit
the proposals in real time.
You need to attach a proposal to a customer record.
Which mechanism should you use to attach the proposal?
A. Timeline attachment
B. Word template
C. Documents tab
Correct Answer: C
Explanation
Explanation/Reference:
Reference:
https://docs.microsoft.com/en-us/dynamics365/customerengagement/on-premises/basics/managesharepoint-documents-document-locations-in-dynamics-365-apps
QUESTION 31
A company uses Dynamics 365 Sales. The company creates sales proposals as PDF documents.
The company wants multiple users to access the latest version of a sales proposal in Dynamics 365 Sales.
Users must be able to attach notes to the proposal.
You need to recommend an app for the company.
Which app should you recommend?
A. Microsoft Excel
B. Microsoft Outlook
C. Dynamics 365 Sales Insights
D. Microsoft Teams
Correct Answer: D
Explanation
QUESTION 32
A company uses Dynamics 365 Marketing. The company uses a third-party app to send email surveys to
prospects to better understand their business needs.
There is currently no link to prospect records and users report that the survey management process is
manual and is difficult to manage.
You need to automate the survey process and streamline collection and analysis of responses.
What are two possible ways to achieve this goal? Each correct answer presents a complete solution.
NOTE: Each correct selection is worth one point.
A. Create a survey in Dynamics 365 Marketing and create a campaign to send it to out and collect data
B. Use Customer Voice to collect and analyze survey results
C. Use Power Automate to automatically send Customer Voice surveys
D. Create surveys in Dynamics 365 Marketing by using Questionnaire
E. Use Customer Voice to compile results from the existing third-party app
Correct Answer: AB
Explanation
Explanation/Reference:
Reference:
https://docs.microsoft.com/en-us/dynamics365/marketing/customer-voice
QUESTION 33
A company implements Dynamics 365 Customer Service for their support desk.
Agents resolve issues based on their own personal experiences or they must try to recreate the problem.
This is causing customer satisfaction issues as resolution time is longer than expected and not consistent.
You need to implement a solution to improve consistency of answers and ensure that agents can share
their answers.
What should you implement?
A. Power Automate to transfer cases
B. Service level agreements
C. Knowledge base management
D. Customer Service Insights
Correct Answer: C
Explanation
Explanation/Reference:
Reference:
https://docs.microsoft.com/en-us/dynamics365/customer-service/customer-service-hub-user-guideknowledge-article
B. Microsoft Outlook
C. Dynamics 365 Sales Insights
D. Microsoft Teams
Correct Answer: D
Explanation
Explanation/Reference:
Reference:
https://appsource.microsoft.com/en-us/product/office/wa104382045?tab=overview
QUESTION 34
A company has a large number of technicians that work in the field.
You need to ensure that Dynamics 365 Field Service can automatically schedule work to minimize travel
time for technicians.
What should you implement?
A. Resource scheduling optimization
B. Unified routing for table records
C. Schedule board
D. Universal Resource Scheduling
Correct Answer: A
Explanation
Explanation/Reference:
Reference:
https://docs.microsoft.com/en-us/dynamics365/field-service/rso-overview
QUESTION 35
A company is implementing Dynamics 365 Project Operations to manage projects for customers.
You are training project managers on how to enter statements of work into the new system.
You need to ensure that the number of hours and the hourly rate for each item are entered.
Where must the project managers enter the required information?
A. Project contracts
B. Project stages
C. Project accounting
D. Resource management
E. Project tracking
Correct Answer: AB
Explanation
Explanation/Reference:
QUESTION 36
You need to update inventory data for a company’s warehouse.
Which two record types can you use to update the inventory? Each correct answer presents a complete
solution.
NOTE: Each correct selection is worth one point.
A. Agreement
B. Warehouse
C. Inventory adjustment
D. Return merchandise authorization (RMA)
Correct Answer: CD
Explanation
Explanation/Reference:`;
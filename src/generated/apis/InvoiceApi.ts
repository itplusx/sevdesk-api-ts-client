/* tslint:disable */
/* eslint-disable */
/**
 * sevdesk API
 * <b>Contact:</b> To contact our support click  <a href=\'https://landing.sevdesk.de/service-support-center-technik\'>here</a><br><br>   # General information  Welcome to our API!<br>  sevdesk offers you  the possibility of retrieving data using an interface, namely the sevdesk API, and making  changes without having to use the web UI. The sevdesk interface is a REST-Full API. All sevdesk  data and functions that are used in the web UI can also be controlled through the API.   # Embedding resources  When retrieving resources by using this API, you might encounter nested resources in the resources you requested.<br>  For example, an invoice always contains a contact, of which you can see the ID and the object name.<br>  This API gives you the possibility to embed these resources completely into the resources you originally requested.<br>  Taking our invoice example, this would mean, that you would not only see the ID and object name of a contact, but rather the complete contact resource.    To embed resources, all you need to do is to add the query parameter \'embed\' to your GET request.<br>  As values, you can provide the name of the nested resource.<br>  Multiple nested resources are also possible by providing multiple names, separated by a comma.    # Authentication and Authorization  The sevdesk API uses a token authentication to authorize calls. For this purpose every sevdesk administrator has one API token, which is a <b>hexadecimal string</b>  containing <b>32 characters</b>. The following clip shows where you can find the  API token if this is your first time with our API.<br><br> <video src=\'openAPI/img/findingTheApiToken.mp4\' controls width=\'640\' height=\'360\'> Your browser cannot play this video.<br> This video explains how to find your sevDesk API token. </video> <br> The token will be needed in every request that you want to send and needs to be provided as a value of an <b>Authorization Header</b>.<br> In this case, we used some random API token. The example shows the token in the Authorization Header. <ul> <li>\"Authorization\" :<span style=\'color:red\'>\"b7794de0085f5cd00560f160f290af38\"</span></li> </ul> The api tokens have an infinite lifetime and, in other words, exist as long as the sevdesk user exists.<br> For this reason, the user should <b>NEVER</b> be deleted.<br> If really necessary, it is advisable to save the api token as we will <b>NOT</b> be able to retrieve it afterwards!<br> It is also possible to generate a new API token, for example, if you want to prevent the usage of your sevdesk account by other people who got your current API token.<br> To achieve this, you just need to click on the \"generate new\" symbol to the right of your token and confirm it with your password.  # API News  To never miss API news and updates again, subscribe to our <b>free API newsletter</b> and get all relevant  information to keep your sevdesk software running smoothly. To subscribe, simply click <a href = \'https://landing.sevdesk.de/api-newsletter\'><b>here</b></a> and confirm the email address to which we may send all updates relevant to you.  # API Requests  In our case, REST API requests need to be build by combining the following components. <table> <tr> <th><b>Component</b></th> <th><b>Description</b></th> </tr> <tr> <td>HTTP-Methods</td> <td> <ul> <li>GET (retrieve a resource)</li> <li>POST (create a resource)</li> <li>PUT (update a resource)</li> <li>DELETE (delete a resource)</li> </ul> </td> </tr> <tr> <td>URL of the API</td> <td><span style=\'color: #2aa198\'>ht</span><span style=\'color: #2aa198\'>tps://my.sevdesk.de/api/v1</span></td> </tr> <tr> <td>URI of the resource</td> <td>The resource to query.<br>For example contacts in sevdesk:<br><br> <span style=\'color:red\'>/Contact</span><br><br> Which will result in the following complete URL:<br><br> <span style=\'color: #2aa198\'>ht</span><span style=\'color: #2aa198\'>tps://my.sevdesk.de/api/v1</span><span style=\'color:red\'>/Contact</span> </td> </tr> <tr> <td>Query parameters</td> <td>Are attached by using the connectives <b>?</b> and <b>&</b> in the URL.<br></td> </tr> <tr> <td>Request headers</td> <td>Typical request headers are for example:<br> <div> <br> <ul> <li>Content-type</li> <li>Authorization</li> <li>Accept-Encoding</li> <li>User-Agent</li> <li>X-Version: Used for resource versioning see information below</li> <li>...</li> </ul> </div> </td> </tr> <tr>  <td>Response headers</td> <td> Typical response headers are for example:<br><br> <div> <ul>  <li>Deprecation: If a resource is deprecated we return true or a timestamp since when</li> <li>...</li> </ul> </div> </td> </tr> <tr> <td>Request body</td> <td>Mostly required in POST and PUT requests.<br> Often the request body contains json, in our case, it also accepts url-encoded data. </td> </tr> </table><br> <span style=\'color:red\'>Note</span>: please pass a meaningful entry at the header \"User-Agent\".  If the \"User-Agent\" is set meaningfully, we can offer better support in case of queries from customers.<br> An example how such a \"User-Agent\" can look like: \"Integration-name by abc\". <br><br> This is a sample request for retrieving existing contacts in sevdesk using curl:<br><br> <img src=\'openAPI/img/GETRequest.PNG\' alt=\'Get Request\' height=\'150\'><br><br> As you can see, the request contains all the components mentioned above.<br> It\'s HTTP method is GET, it has a correct endpoint  (<span style=\'color: #2aa198\'>ht</span><span style=\'color: #2aa198\'>tps://my.sevdesk.de/api/v1</span><span style=\'color:red\'>/Contact</span>), query parameters and additional <b>header</b> information!<br><br> <b>Query Parameters</b><br><br> As you might have seen in the sample request above, there are several query parameters located in the url.<br> Those are mostly optional but prove to be very useful for a lot of requests as they can limit, extend, sort or filter the data you will get as a response.<br><br> These are the most used query parameter for the sevdesk API. <table> <tr> <th><b>Parameter</b></th> <th><b>Description</b></th> </tr> <tr> <td>embed</td> <td>Will extend some of the returned data.<br> A brief example can be found below.</td> </tr> <tr> <td>countAll</td> <td>\"countAll=true\" returns the number of items</td> </tr> </table> This is an example for the usage of the embed parameter.<br> The following first request will return all company contact entries in sevdesk up to a limit of 100 without any additional information and no offset.<br><br> <img src=\'openAPI/img/ContactQueryWithoutEmbed.PNG\' width=\'900\' height=\'850\'><br><br> Now have a look at the category attribute located in the response.<br> Naturally, it just contains the id and the object name of the object but no further information.<br> We will now use the parameter embed with the value \"category\".<br><br> <img src=\'openAPI/img/ContactQueryWithEmbed.PNG\' width=\'900\' height=\'850\'><br><br> As you can see, the category object is now extended and shows all the attributes and their corresponding values.<br><br> There are lot of other query parameters that can be used to filter the returned data for objects that match a certain pattern, however, those will not be mentioned here and instead can be found at the detail documentation of the most used API endpoints like contact, invoice or voucher.<br><br> <b>Pagination</b><br> <p>This API implements pagination to help you efficiently manage large result sets. Instead of retrieving all records at once, you can request specific subsets of data using the following parameters.</p> <table> <tr> <th><b>Parameter</b></th> <th><b>Type</b></th> <th><b>Description</b></th> </tr> <tr> <td>limit</td> <td>Integer</td> <td>Limits the number of entries that are returned.<br> Most useful in GET requests which will most likely deliver big sets of data like country or currency lists.<br> The limit must be between 1 and 1000. </td> </tr> <tr> <td>offset</td> <td>Integer</td> <td>Specifies a certain offset for the data that will be returned.<br> As an example, you can specify \"offset=2\" if you want all entries except for the first two.</td> </tr> <tr> <td>countAll</td> <td>Boolean</td> <td>When set to <code>true</code>, the response will include the total count of available records. Defaults to <code>false</code>.</td> </tr> </table> <br> <b>How Pagination Works</b><br> <ol> <li>The limit parameter determines how many records will be included in each response</li> <li>The offset parameter indicates how many records to skip before beginning to return results</li> <li>When countAll=true is specified, the response will include a total field with the complete count of available records</li> </ol> <b>Example Usage:</b><br> <b>Basic Request</b><br> <ul><li><code>ht<span>tps://my.sevdesk.de/api/v1/Invoice?limit=10&offset=0<span></code></li></ul> <p>This returns the first 10 resources.</p><br> <b>Page Navigation</b><br> <ul><li><code>ht<span>tps://my.sevdesk.de/api/v1/Invoice?limit=10&offset=10<span></code></li></ul> <p>This returns resources 11-20 (the second page when using a page size of 10).</p><br> <b>With Total Count</b><br> <ul><li><code>ht<span>tps://my.sevdesk.de/api/v1/Invoice?limit=10&offset=0&countAll=true<span></code></li></ul> <p>This returns the first 10 resources and includes the total count of available resources in the response.</p> <b>Response Format</b><br> <pre> <code> {<br> &nbsp;&nbsp;&nbsp;&nbsp;\"total\": \"157\",<br> &nbsp;&nbsp;&nbsp;&nbsp;\"objects\": [<br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;// Array of resource objects<br> &nbsp;&nbsp;&nbsp;&nbsp;]<br> &nbsp;} </code> </pre> <br> <b>Best Practises</b><br> <ul> <li>Keep <code>limit</code> values reasonable (between 10-100) to avoid performance issues</li> <li>Use <code>countAll=true</code> when you need to implement UI pagination controls</li> </ul> <b>Request Headers</b><br><br> The HTTP request (response) headers allow the client as well as the server to pass additional information with the request.<br> They transfer the parameters and arguments which are important for transmitting data over HTTP.<br> Three headers which are useful / necessary when using the sevdesk API are \"Authorization, \"Accept\" and  \"Content-type\".<br> Underneath is a brief description of why and how they should be used.<br><br> <b>Authorization</b><br><br> Should be used to provide your API token in the header. <ul> <li>Authorization:<span style=\'color:red\'>yourApiToken</span></li> </ul> <b>Accept</b><br><br> Specifies the format of the response.<br> Required for operations with a response body. <ul> <li>Accept:application/<span style=\'color:red\'>format</span> </li> </ul> In our case, <code><span style=\'color:red\'>format</span></code> could be replaced with <code>json</code> or <code>xml</code><br><br> <b>Content-type</b><br><br> Specifies which format is used in the request.<br> Is required for operations with a request body. <ul> <li>Content-type:application/<span style=\'color:red\'>format</span></li> </ul> In our case,<code><span style=\'color:red\'>format</span></code>could be replaced with <code>json</code> or <code>x-www-form-urlencoded</code> <br><br><b>API Responses</b><br><br> HTTP status codes<br> When calling the sevdesk API it is very likely that you will get a HTTP status code in the response.<br> Some API calls will also return JSON response bodies which will contain information about the resource.<br> Each status code which is returned will either be a <b>success</b> code or an <b>error</b> code.<br><br> Success codes <table> <tr> <th><b>Status code</b></th> <th><b>Description</b></th> </tr> <tr> <td><code>200 OK</code></td> <td>The request was successful</td> </tr> <tr> <td><code>201 Created</code></td> <td>Most likely to be found in the response of a <b>POST</b> request.<br> This code indicates that the desired resource was successfully created.</td> </tr> </table> <br>Error codes <table> <tr> <th><b>Status code</b></th> <th><b>Description</b></th> </tr> <tr> <td><code>400 Bad request</code></td> <td>The request you sent is most likely syntactically incorrect.<br> You should check if the parameters in the request body or the url are correct.</td> </tr> <tr> <td><code>401 Unauthorized</code></td> <td>The authentication failed.<br> Most likely caused by a missing or wrong API token.</td> </tr> <tr> <td><code>403 Forbidden</code></td> <td>You do not have the permission the access the resource which is requested.</td> </tr> <tr> <td><code>404 Not found</code></td> <td>The resource you specified does not exist.</td> </tr> <tr> <td><code>500 Internal server error</code></td> <td>An internal server error has occurred.<br> Normally this means that something went wrong on our side.<br> However, sometimes this error will appear if we missed to catch an error which is normally a 400 status code! </td> </tr> </table> <br><br> <b>Resource Versioning</b> <br><br> We use resource versioning to handle breaking changes for our endpoints, these are rarely used and will be communicated before we remove older versions.<br> To call a different version we use a specific header <code>X-Version</code> that should be filled with the desired version.<br> <ul>  <li>If you do not specify any version we assume <code>default</code></li> <li>If you specify a version that does not exist or was removed, you will get an error with information which versions are available</li> </ul> <table> <tr> <th>X-Version</th> <th>Description</th> </tr> <tr> <td><code>default</code></td> <td>Should always reference the oldest version.<br> If a specific resource is updated with a new version, <br> then the default version stays the same until the old version is deleted</td> </tr> <tr> <td><code>1.0</code> ... <code>1.9</code></td> <td>Our incrementally version for each resource independent<br> <b>Important</b>: A resource can be available via <code>default</code> but not <code>1.0</code></td> </tr> </table>  # Your First Request  After reading the introduction to our API, you should now be able to make your first call.<br> For testing our API, we would always recommend to create a trial account for sevdesk to prevent unwanted changes to your main account.<br> A trial account will be in the highest tariff (materials management), so every sevdesk function can be tested!   To start testing we would recommend one of the following tools: <ul> <li><a href=\'https://www.getpostman.com/\'>Postman</a></li> <li><a href=\'https://curl.haxx.se/download.html\'>cURL</a></li> </ul> This example will illustrate your first request, which is creating a new Contact in sevdesk.<br> <ol> <li>Download <a href=\'https://www.getpostman.com/\'><b>Postman</b></a> for your desired system and start the application</li> <li>Enter <span><b>ht</span>tps://my.sevdesk.de/api/v1/Contact</b> as the url</li> <li>Create an authorization header and insert your API token as the value</li> <li>For this test, select <b>POST</b> as the HTTP method</li> <li>Go to <b>Headers</b> and enter the key-value pair <b>Content-type</b> + <b>application/x-www-form-urlencoded</b><br> As an alternative, you can just go to <b>Body</b> and select <b>x-www-form-urlencoded</b></li> <li>Now go to <b>Body</b> (if you are not there yet) and enter the key-value pairs as shown in the following picture<br><br> <img src=\'openAPI/img/FirstRequestPostman.PNG\' width=\'900\'><br><br></li> <li>Click on <b>Send</b>. Your response should now look like this:<br><br> <img src=\'openAPI/img/FirstRequestResponse.PNG\' width=\'900\'></li> </ol> As you can see, a successful response in this case returns a JSON-formatted response body containing the contact you just created.<br> For keeping it simple, this was only a minimal example of creating a contact.<br> There are however numerous combinations of parameters that you can provide which add information to your contact.  # sevdesk-Update 2.0  Started in 2024 we introduced a new era of bookkeeping in sevdesk. You can check if you already received the update by clicking on your profile in the top right in the sevdesk WebApp or by using the [Tools/bookkeepingSystemVersion endpoint](#tag/Basics/operation/bookkeepingSystemVersion).<br> The old version will be available for some customers until the end of 2024. In this short list we have outlined the changed endpoints with links to jump to the descriptions. If you received the [api newsletter](https://landing.sevdesk.de/api-newsletter) you already know what changed. Otherwise you can check the api changes [here](https://tech.sevdesk.com/api_news/posts/2024_04_04-system-update-breaking-changes/).  ## Check your bookkeeping system version  With this endpoint you can check which version you / your client uses. On that basis you must use the old or new versions of the endpoints. [Tools/bookkeepingSystemVersion Endpoint](#tag/Basics/operation/bookkeepingSystemVersion)  ## Tax Rules  <I><b>(affects the properties taxType and taxSet)</b></I><br> With sevdesk-Update 2.0 we changed the available tax rules. Due to a high likeliness of non-compliant accounting, we won\'t support the following tax type with the sevdesk-Update 2.0 anymore:  `taxType = custom (this includes \'taxSet\': ... )`  If you only use <code>taxType = default</code>, <code>taxType = eu</code> and / or <code>taxType = ss</code>, these tax types will automatically be mapped to the new tax rules for a transition period, but you have to make sure the taxRate used in positions is within the allowed ones (you may use the [ReceiptGuidance endpoint](#tag/Voucher/operation/forAllAccounts) for that), otherwise the API will return a validation error (HTTP status code 422). For [orders](#tag/Order), [invoices](#tag/Invoice), [vouchers](#tag/Voucher) and [credit notes](#tag/CreditNote) that were created within sevdesk-Update 2.0 the response will change in all endpoints in which these objects are returned.<br> So orders, invoices, vouchers and credit notes created within sevdesk system version 1.0 still have a taxType in the response. When they are created in sevdesk-Update 2.0 they will have a taxRule instead.<br> You can continue to use taxType at first, but we recommend switching to taxRule as there are new options available that were not previously supported.<br> For orders, invoices, vouchers and credit notes that were created within sevdesk-Update 2.0 the response will change in all endpoints in which these objects are returned. This documentation holds the most current version of the endpoints.<br> Here are lists of the currently available tax rules, sorted by their use case, structured into revenue/expense and \'Regelbesteuerer\'/\'Kleinunternehmer\'.  #### VAT rules for \'Regelbesteuerung\' in sevdesk-Update 2.0 (Revenue)  <table> <tr> <th>VAT Rule</th> <th>New Property</th> <th>Allowed taxRate in positions</th> <th>Old property (deprecated)</th> <th>Unsupported use cases</th> </tr> <tr> <td>Umsatzsteuerpflichtige Umsätze</td> <td><code>\'taxRule\': 1</code></td> <td> <ul> <li>0.0</li> <li>7.0</li> <li>19.0</li> </ul> </td> <td><code>\'taxType\': \'default\'</code></td> <td>-</td> </tr> <tr> <td>Ausfuhren</td> <td><code>\'taxRule\': 2</code></td> <td> <ul> <li>0.0</li> </ul> </td> <td>-</td> <td>-</td> </tr> <tr> <td>Innergemeinschaftliche Lieferungen</td> <td><code>\'taxRule\': 3</code></td> <td> <ul> <li>0.0</li> <li>7.0</li> <li>19.0</li> </ul> </td> <td><code>\'taxType\': \'eu\'</code></td> <td>-</td> </tr> <tr> <td>Steuerfreie Umsätze §4 UStG</td> <td><code>\'taxRule\': 4</code></td> <td> <ul> <li>0.0</li> </ul> </td> <td>-</td> <td>-</td> </tr> <tr> <td>Reverse Charge gem. §13b UStG (field 60 in VAT return)</td> <td><code>\'taxRule\': 5</code></td> <td> <ul> <li>0.0</li> </ul> </td> <td>-</td> <td>-</td> </tr> <tr> <td>Reverse Charge gem. §18b UStG (field 21 in VAT return)</td> <td><code>\'taxRule\': 21</code></td> <td> <ul> <li>0.0</li> </ul> </td> <td>-</td> <td> <ul> <li>Usage in vouchers</li> <li>Creation of an advance invoice</li> <li>Creation of a partial invoice</li> <li>Creation of a final invoice</li> </ul> </td> </tr> <tr> <td>Nicht im Inland steuerbare Leistung</td> <td><code>\'taxRule\': 17</code></td> <td> <ul> <li>0.0</li> </ul> </td> <td><code>\'taxType\': \'noteu\'</code></td> <td> <ul> <li>Creation of an advance invoice</li> <li>Creation of a partial invoice</li> <li>Creation of a final invoice</li> </ul> </td> </tr> <tr> <td>One Stop Shop (goods)</td> <td><code>\'taxRule\': 18</code></td> <td> <ul> <li>depending on country</li> </ul> </td> <td>-</td> <td> <ul> <li>Usage in vouchers</li> <li>Creation as e-invoice</li> <li>Creation of an invoice with a custom revenue account (<code>accountDatev</code>)</li> <li>Creation of an advance invoice</li> <li>Creation of a partial invoice</li> <li>Creation of a final invoice</li> </ul> </td> </tr> <tr> <td>One Stop Shop (electronic service)</td> <td><code>\'taxRule\': 19</code></td> <td> <ul> <li>depending on country</li> </ul> </td> <td>-</td> <td> <ul> <li>Usage in vouchers</li> <li>Creation as e-invoice</li> <li>Creation of an invoice with a custom revenue account (<code>accountDatev</code>)</li> <li>Creation of an advance invoice</li> <li>Creation of a partial invoice</li> <li>Creation of a final invoice</li> </ul> </td> </tr> <tr> <td>One Stop Shop (other service)</td> <td><code>\'taxRule\': 20</code></td> <td> <ul> <li>depending on country</li> </ul> </td> <td>-</td> <td> <ul> <li>Usage in vouchers</li> <li>Creation as e-invoice</li> <li>Creation of an invoice with a custom revenue account (<code>accountDatev</code>)</li> <li>Creation of an advance invoice</li> <li>Creation of a partial invoice</li> <li>Creation of a final invoice</li> </ul> </td> </tr> </table>   See the <a href=\"#tag/Invoice/operation/createInvoiceFromOrder\">example request</a> to create a normal invoice <code>\"invoiceType\": \"RE\"</code> from an order that uses a tax rule that does not support advance, partial or final invoices.    #### VAT rules for \'Regelbesteuerung\' in sevdesk-Update 2.0 (Expense)  <table> <tr> <th>VAT Rule</th> <th>New Property</th> <th>Allowed taxRate in positions</th> <th>Old property (deprecated)</th> </tr> <tr> <td>Innergemeinschaftliche Erwerbe</td> <td><code>\'taxRule\': 8</code></td> <td> <ul> <li>0.0</li> <li>7.0</li> <li>19.0</li> </ul> </td> <td>-</td> </tr> <tr> <td>Vorsteuerabziehbare Aufwendungen</td> <td><code>\'taxRule\': 9</code></td> <td> <ul> <li>0.0</li> <li>7.0</li> <li>19.0</li> </ul> </td> <td><code>\'taxType\': \'default\'</code></td> </tr> <tr> <td>Nicht vorsteuerabziehbare Aufwendungen</td> <td><code>\'taxRule\': 10</code></td> <td> <ul> <li>0.0</li> </ul> </td> <td>-</td> </tr> <tr> <td>Reverse Charge gem. §13b Abs. 2 UStG mit Vorsteuerabzug 0% (19%)</td> <td><code>\'taxRule\': 12</code></td> <td> <ul> <li>0.0</li> </ul> </td> <td>-</td> </tr> <tr> <td>Reverse Charge gem. §13b UStG ohne Vorsteuerabzug 0% (19%)</td> <td><code>\'taxRule\': 13</code></td> <td> <ul> <li>0.0</li> </ul> </td> <td>-</td> </tr> <tr> <td>Reverse Charge gem. §13b Abs. 1 EU Umsätze 0% (19%)</td> <td><code>\'taxRule\': 14</code></td> <td> <ul> <li>0.0</li> </ul> </td> <td>-</td> </tr> </table>    #### VAT rules for small business owner (\'Kleinunternehmer\') in sevdesk-Update 2.0 (Revenue)  <table> <tr> <th>VAT Rule</th> <th>New Property</th> <th>Allowed taxRate in positions</th> <th>Old property (deprecated)</th> </tr> <tr> <td>Steuer nicht erhoben nach §19UStG</td> <td><code>\'taxRule\': 11</code></td> <td> <ul> <li>0.0</li> </ul> </td> <td><code>\'taxType\': \'ss\'</code></td> </tr> </table>    #### VAT rules for small business owner (\'Kleinunternehmer\') in sevdesk-Update 2.0 (Expense)  <table> <tr> <th>VAT Rule</th> <th>New Property</th> <th>Allowed taxRate in positions</th> <th>Old property (deprecated)</th> </tr> <tr> <td>Nicht vorsteuerabziehbare Aufwendungen</td> <td><code>\'taxRule\': 10</code></td> <td> <ul> <li>0.0</li> </ul> </td> <td><code>\'taxType\': \'ss\'</code></td> </tr> <tr> <td>Reverse Charge gem. §13b UStG ohne Vorsteuerabzug 0% (19%)</td> <td><code>\'taxRule\': 13</code></td> <td> <ul> <li>0.0</li> </ul> </td> <td>-</td> </tr> </table>    ## Booking Accounts  <I><b>(affects the property accountingType)</b></I><br> With sevdesk-Update 2.0 we changed the available booking accounts and their combinatorics. If you use accountingTypes with SKR numbers that are still available in our receipt guidance, you do not have to change anything in your requests. These booking accounts will automatically be mapped to the new representation (Account Datev). But you have to make sure the taxRate used in positions and taxRule used in the voucher is within the allowed ones (check the [ReceiptGuidance](#tag/Voucher/operation/forAllAccounts)) of the provided booking account, otherwise the API will return a validation error (HTTP status code 422). For orders, invoices, vouchers and credit notes in that were created within sevdesk-Update 2.0 the response will change in all endpoints were these objects are returned.  ## Receipt Guidance  To help you decide which account can be used in conjunction with which tax rules, tax rates and documents, we created several guidance endpoints just there for you to get helpful information. You can find the descriptions in the changes section for Vouchers below or jump directly to the endpoint description by using this link: [Receipt Guidance](#tag/Voucher/operation/forAllAccounts).<br> Receipt Guidance is planned to give you guidance in which account you can pick (depending on your filter criteria and the client settings (e.g. \'Kleinunternehmer\')) and which tax rate and [tax rules](#section/sevdesk-Update-2.0/Tax-Rules) are comptaible with them.   ## Vouchers   ### Saving a new voucher ([Voucher/Factory/saveVoucher](#tag/Voucher/operation/voucherFactorySaveVoucher))  Following use cases do not work anymore or have changed: <ol> <li>Custom vat regulations (taxType = custom and provided taxSet)</li> <li>Only specific tax rates and booking accounts are available. Check [ReceiptGuidance](#tag/Voucher/operation/forAllAccounts)</li> <li>Custom accounting types do not work anymore</li> <li>Using an asset booking account without creating an asset is no longer possible</li> <li>A voucher can not be directly set to paid anymore, therefore only status <code>DRAFT (50)</code> or <code>UNPAID / DUE (100)</code> are possible when creating a new voucher. Use the [/api/v1/Voucher/{voucherId}/bookAmount endpoint](#tag/Voucher/operation/bookVoucher) to set a voucher to paid</li> <li>Setting or changing the property enshrined. Use our new endpoint [/api/v1/Voucher/{voucherId}/enshrine](#tag/Voucher/operation/voucherEnshrine) to enshrine a voucher</li> </ol>  ### Get or update an existing voucher ([Voucher/{voucherId}](#tag/Voucher/operation/updateVoucher))  Following use cases do not work anymore or have changed: <ol> <li>Custom vat regulations (taxType = custom and provided taxSet)</li> <li>See [ReceiptGuidance](#tag/Voucher/operation/forAllAccounts) to check which tax rates are available in conjunction with which tax rules</li> </ol>  ### Book a voucher ([Voucher/{voucherId}](#tag/Voucher/operation/bookVoucher))  Following use cases do not work anymore or have changed: <ol> <li>Voucher with negative voucher positions can not use \'cash discount\' as a payment difference anymore</li> <li>A Voucher can only be booked when it was registered beforehand (see above)</li> <li>Based on the combination of voucher positions some payment difference reasons are not possible anymore</li> <li>The currency fluctuation (CF) type is no longer supported as a payment difference reason</li> </ol>  ## Banking  Following use cases do not work anymore or have changed: <ol> <li>Setting or changing the property enshrined will now only be available by using the [appropriate enshrine endpoint](#tag/CheckAccountTransaction/operation/checkAccountTransactionEnshrine)</li> </ol>  ## Invoicing  The changes to the vat rules also apply here. Check the documentation of voucher above as the changes are the same.  ### General stricter validation in PUT and POST endpoints  We added stricter validation to ensure only correct invoices are created which than can be further processed in sevdesk. Following use cases do not work anymore or have changed: <ol> <li>Creating an invoice with taxType <code>custom</code> does not work anymore</li> <li>Processing an invoice beyond status <code>DRAFT (100)</code> without a contact does not work anymore</li> <li>Advanced invoices (<code>invoiceType: \'AR\'</code>) and partial invoices (<code>invoiceType: \'TR\'</code>) can only be created with the tax rule \'Umsatzsteuerpflichtige Umsätze (taxRule: 1)\'(for Regelbesteuerer) or \'Steuer nicht erhoben nach §19 UStG (taxRule: 11)\'(for Kleinunternehmer)</li> <li>Creating a dunning (<code>invoiceType: \'MA\'</code>) with the value of property <code>reminderCharge</code> greater than 0 does not work anymore</li> <li>Creating an advanced invoice (<code>invoiceType: \'AR\'</code>), a partial invoice (<code>invoiceType: \'TR\'</code>) or a final invoice (<code>invoiceType: \'ER\'</code>) with a currency deviating from the clients <code>defaultCurrency</code> is not possible anymore</li> <li>Changing the status manually does not work anymore (see \'Removed endpoint /Invoice/{invoiceId}/changeStatus\' below)</li> <li>Enshrining now has to be done by using the [enshrine endpoint](#tag/Invoice/operation/invoiceEnshrine) (see below)</li> </ol>  ### Saving an invoice ([Invoice/Factory/saveInvoice](#tag/Invoice/operation/createInvoiceByFactory))  Following use cases do not work anymore or have changed: <ol> <li>Invoices can only be created with the status <code>DRAFT (100)</code> and can not be changed manually. Use the matching endpoints (e.g. [sendViaEmail](#tag/Invoice/operation/sendInvoiceViaEMail)) to automatically change the status accordingly</li> <li>Setting or changing the property <code>enshrined</code> is now only possible by using the [enshrine endpoint](#tag/CheckAccountTransaction/operation/checkAccountTransactionEnshrine)</li> </ol>  ### Using an order to create an invoice ([Invoice/Factory/createInvoiceFromOrder](#tag/Invoice/operation/createInvoiceFromOrder))  Following use cases do not work anymore or have changed: <ol> <li>Creating a final invoice (partialType: \'ER\') is not possible if an advanced invoice (partialType: \'AR\') or partial invoice (partialType: \'TR\') exists. This functionality will be added in a later update</li> </ol>  ### Removed endpoint /Invoice/{invoiceId}/changeStatus  This endpoint will be completely removed (including sevdesk system version 1.0!). Using these endpoints will automatically change the status accordingly: <ul> <li>[Invoice/{invoiceId}/sendViaEmail](#tag/Invoice/operation/sendInvoiceViaEMail)</li> <li>[Invoice/{invoiceId}/sendBy](#tag/Invoice/operation/invoiceSendBy)</li> <li>[Invoice/{invoiceId}/bookAmount](#tag/Invoice/operation/bookInvoice)</li> <li>[Invoice/{invoiceId}/resetToDraft](#tag/Invoice/operation/invoiceResetToDraft)</li> <li>[Invoice/{invoiceId}/resetToOpen](#tag/Invoice/operation/invoiceResetToOpen)</li> </ul>  ### New endpoint [Invoice/{invoiceId}/resetToDraft](#tag/Invoice/operation/invoiceResetToDraft)  This new endpoint can be used to reset the status of an invoice to <code>DRAFT (100)</code>.  ### New endpoint [Invoice/{invoiceId}/resetToOpen](#tag/Invoice/operation/invoiceResetToOpen)  This new endpoint can be used to reset the status of an invoice to <code>OPEN (200)</code>.  ### New endpoint [Invoice/{invoiceId}/enshrine]((#tag/Invoice/operation/invoiceEnshrine))  The enshrine endpoint is now used to set the property <code>enshrined</code>. <b>This operation CAN NOT be undone due to legal reasons!</b>  ## Credit Notes  The changes to the vat rules also apply here. Check the documentation of voucher above as the changes are the same.  ### General stricter validation in PUT and POST endpoints  We added stricter validation to ensure only correct credit notes are created which than can be further processed in sevdesk. Due to the move from taxTypes/taxSets to taxRules you need to check the compatibility of the taxRules in combination with the tax rates. Following use cases do not work anymore or have changed: <ol> <li>Creating a credit note without a date of delivery (<code>deliveryDateUntil</code>) for an invoice that has a date of delivery (<code>deliveryDateUntil</code>) is no longer possible</li> <li>Creating a credit note with a date of delivery (<code>deliveryDateUntil</code>) for an invoice that has no date of delivery (<code>deliveryDateUntil</code>) is no longer possible</li> <li>Creating a credit note with a date of delivery (<code>deliveryDateUntil</code>) that is before the date of delivery (<code>deliveryDateUntil</code>) of the invoice is no longer possible</li> <li>Creating a credit note for an advanced invoice (<code>invoiceType: \'AR\'</code>) or partial invoice (<code>invoiceType: \'TR\'</code>) is no longer possible</li> <li>Creating a credit note for a voucher is no longer possible</li> <li>Creating a credit note with <code>\"bookingCategory\": \"ACCOUNTING_TYPE\"</code> is currently not supported</li> <li>Currency fluctuation (CF) is no longer supported as a payment difference</li> </ol>  ### Saving a credit note ([CreditNote/Factory/saveCreditNote](#tag/CreditNote/operation/createcreditNote))  Following use cases do not work anymore or have changed: <ol> <li>Credit notes can only be created with the status <code>DRAFT (100)</code> and can not be changed manually. Use the matching endpoints (e.g. [sendViaEmail](#tag/CreditNote/operation/sendCreditNoteViaEMail)) to automatically change the status accordingly</li> <li>Enshrining now has to be done by using the enshrine endpoint (see below)</li> </ol>  ### Removed endpoint /CreditNote/Factory/createFromVoucher  The endpoint will be removed. It is not possible anymore to create credit notes for vouchers within sevdesk-Update 2.0. The endpoint continues to stay available for existing sevdesk system version 1.0 clients.  ### Removed endpoint /CreditNote/{creditNoteId}/changeStatus  This endpoint will be completely removed (including sevdesk system version 1.0!). Using these endpoints will automatically change the status accordingly: <ul> <li>[CreditNote/{creditNoteId}/sendViaEmail](#tag/CreditNote/operation/sendCreditNoteViaEMail)</li> <li>[CreditNote/{creditNoteId}/sendBy](#tag/CreditNote/operation/creditNoteSendBy)</li> <li>[CreditNote/{creditNoteId}/bookAmount](#tag/CreditNote/operation/bookCreditNote)</li> <li>[CreditNote/{creditNoteId}/resetToDraft](#tag/CreditNote/operation/creditNoteResetToDraft)</li> <li>[CreditNote/{creditNoteId}/resetToOpen](#tag/CreditNote/operation/creditNoteResetToOpen)</li> </ul>  ### New endpoint CreditNote/{creditNoteId}/resetToDraft  This new endpoint can be used to reset the status of a credit note to <code>DRAFT (100)</code>. You can find the documentation [here](#tag/CreditNote/operation/creditNoteResetToDraft).  ### New endpoint CreditNote/{creditNoteId}/resetToOpen  This new endpoint can be used to reset the status of a credit note to <code>OPEN (200)</code>. You can find the documentation [here](#tag/CreditNote/operation/creditNoteResetToOpen).  ### New endpoint CreditNote/{creditNoteId}/enshrine  [The enshrine endpoint](#tag/CreditNote/operation/creditNoteEnshrine) is now used to set the property <code>enshrined</code>. <b>This operation CAN NOT be undone due to legal reasons!</b> ## Parts   ### General stricter validation in PUT and POST endpoints  Following use cases do not work anymore or have changed: <ol> <li>Creating products with a tax rate other than 0.0, 7.0 and 19.0 is no longer possible</li> </ol> 
 *
 * The version of the OpenAPI document: 2.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  BookInvoice200Response,
  BookInvoiceRequest,
  CheckAccountTransactionEnshrine200Response,
  ContactCustomerNumberAvailabilityCheck200Response,
  CreateInvoiceReminderRequest,
  GetInvoicePositionsById200Response,
  GetInvoices200Response,
  InvoiceGetPdf200Response,
  InvoiceGetXml200Response,
  InvoiceRender201Response,
  InvoiceRenderRequest,
  InvoiceResetToDraft200Response,
  InvoiceResetToOpen200Response,
  InvoiceSendByRequest,
  ModelCreateInvoiceFromOrder,
  ModelEmail,
  ModelInvoiceResponse,
  SaveInvoice,
  SaveInvoiceResponse,
  SendInvoiceViaEMailRequest,
  ValidationError,
} from '../models/index';
import {
    BookInvoice200ResponseFromJSON,
    BookInvoice200ResponseToJSON,
    BookInvoiceRequestFromJSON,
    BookInvoiceRequestToJSON,
    CheckAccountTransactionEnshrine200ResponseFromJSON,
    CheckAccountTransactionEnshrine200ResponseToJSON,
    ContactCustomerNumberAvailabilityCheck200ResponseFromJSON,
    ContactCustomerNumberAvailabilityCheck200ResponseToJSON,
    CreateInvoiceReminderRequestFromJSON,
    CreateInvoiceReminderRequestToJSON,
    GetInvoicePositionsById200ResponseFromJSON,
    GetInvoicePositionsById200ResponseToJSON,
    GetInvoices200ResponseFromJSON,
    GetInvoices200ResponseToJSON,
    InvoiceGetPdf200ResponseFromJSON,
    InvoiceGetPdf200ResponseToJSON,
    InvoiceGetXml200ResponseFromJSON,
    InvoiceGetXml200ResponseToJSON,
    InvoiceRender201ResponseFromJSON,
    InvoiceRender201ResponseToJSON,
    InvoiceRenderRequestFromJSON,
    InvoiceRenderRequestToJSON,
    InvoiceResetToDraft200ResponseFromJSON,
    InvoiceResetToDraft200ResponseToJSON,
    InvoiceResetToOpen200ResponseFromJSON,
    InvoiceResetToOpen200ResponseToJSON,
    InvoiceSendByRequestFromJSON,
    InvoiceSendByRequestToJSON,
    ModelCreateInvoiceFromOrderFromJSON,
    ModelCreateInvoiceFromOrderToJSON,
    ModelEmailFromJSON,
    ModelEmailToJSON,
    ModelInvoiceResponseFromJSON,
    ModelInvoiceResponseToJSON,
    SaveInvoiceFromJSON,
    SaveInvoiceToJSON,
    SaveInvoiceResponseFromJSON,
    SaveInvoiceResponseToJSON,
    SendInvoiceViaEMailRequestFromJSON,
    SendInvoiceViaEMailRequestToJSON,
    ValidationErrorFromJSON,
    ValidationErrorToJSON,
} from '../models/index';

export interface BookInvoiceOperationRequest {
    invoiceId: number;
    bookInvoiceRequest?: BookInvoiceRequest;
}

export interface CancelInvoiceRequest {
    invoiceId: number;
}

export interface CreateInvoiceByFactoryRequest {
    saveInvoice?: SaveInvoice;
}

export interface CreateInvoiceFromOrderRequest {
    modelCreateInvoiceFromOrder?: ModelCreateInvoiceFromOrder;
}

export interface CreateInvoiceReminderOperationRequest {
    invoiceId: number;
    invoiceObjectName: string;
    createInvoiceReminderRequest?: CreateInvoiceReminderRequest;
}

export interface GetInvoiceByIdRequest {
    invoiceId: number;
}

export interface GetInvoicePositionsByIdRequest {
    invoiceId: number;
    limit?: number;
    offset?: number;
    embed?: Array<string>;
}

export interface GetInvoicesRequest {
    status?: GetInvoicesStatusEnum;
    invoiceNumber?: string;
    startDate?: number;
    endDate?: number;
    contactId?: number;
    contactObjectName?: string;
}

export interface GetIsInvoicePartiallyPaidRequest {
    invoiceId: number;
}

export interface InvoiceEnshrineRequest {
    invoiceId: number;
}

export interface InvoiceGetPdfRequest {
    invoiceId: number;
    download?: boolean;
    preventSendBy?: boolean;
}

export interface InvoiceGetXmlRequest {
    invoiceId: number;
}

export interface InvoiceRenderOperationRequest {
    invoiceId: number;
    invoiceRenderRequest?: InvoiceRenderRequest;
}

export interface InvoiceResetToDraftRequest {
    invoiceId: number;
}

export interface InvoiceResetToOpenRequest {
    invoiceId: number;
}

export interface InvoiceSendByOperationRequest {
    invoiceId: number;
    invoiceSendByRequest?: InvoiceSendByRequest;
}

export interface SendInvoiceViaEMailOperationRequest {
    invoiceId: number;
    sendInvoiceViaEMailRequest?: SendInvoiceViaEMailRequest;
}

/**
 * 
 */
export class InvoiceApi extends runtime.BaseAPI {

    /**
     * Booking the invoice with a transaction is probably the most important part in the bookkeeping process.<br> There are several ways on correctly booking an invoice, all by using the same endpoint.<br> for more information look <a href=\'#tag/Invoice/How-to-book-an-invoice\'>here</a>.
     * Book an invoice
     */
    async bookInvoiceRaw(requestParameters: BookInvoiceOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BookInvoice200Response>> {
        if (requestParameters['invoiceId'] == null) {
            throw new runtime.RequiredError(
                'invoiceId',
                'Required parameter "invoiceId" was null or undefined when calling bookInvoice().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // api_key authentication
        }


        let urlPath = `/Invoice/{invoiceId}/bookAmount`;
        urlPath = urlPath.replace(`{${"invoiceId"}}`, encodeURIComponent(String(requestParameters['invoiceId'])));

        const response = await this.request({
            path: urlPath,
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: BookInvoiceRequestToJSON(requestParameters['bookInvoiceRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => BookInvoice200ResponseFromJSON(jsonValue));
    }

    /**
     * Booking the invoice with a transaction is probably the most important part in the bookkeeping process.<br> There are several ways on correctly booking an invoice, all by using the same endpoint.<br> for more information look <a href=\'#tag/Invoice/How-to-book-an-invoice\'>here</a>.
     * Book an invoice
     */
    async bookInvoice(requestParameters: BookInvoiceOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BookInvoice200Response> {
        const response = await this.bookInvoiceRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * This endpoint will cancel the specified invoice therefor creating a cancellation invoice.<br>       The cancellation invoice will be automatically paid and the source invoices status will change to \'cancelled\'.
     * Cancel an invoice / Create cancellation invoice
     */
    async cancelInvoiceRaw(requestParameters: CancelInvoiceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ModelInvoiceResponse>> {
        if (requestParameters['invoiceId'] == null) {
            throw new runtime.RequiredError(
                'invoiceId',
                'Required parameter "invoiceId" was null or undefined when calling cancelInvoice().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // api_key authentication
        }


        let urlPath = `/Invoice/{invoiceId}/cancelInvoice`;
        urlPath = urlPath.replace(`{${"invoiceId"}}`, encodeURIComponent(String(requestParameters['invoiceId'])));

        const response = await this.request({
            path: urlPath,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ModelInvoiceResponseFromJSON(jsonValue));
    }

    /**
     * This endpoint will cancel the specified invoice therefor creating a cancellation invoice.<br>       The cancellation invoice will be automatically paid and the source invoices status will change to \'cancelled\'.
     * Cancel an invoice / Create cancellation invoice
     */
    async cancelInvoice(requestParameters: CancelInvoiceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ModelInvoiceResponse> {
        const response = await this.cancelInvoiceRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * This endpoint offers you the following functionality.       <ul>          <li>Create invoices together with positions and discounts</li>          <li>Delete positions while adding new ones</li>          <li>Delete or add discounts, or both at the same time</li>          <li>Automatically fill the address of the supplied contact into the invoice address</li>       </ul>       To make your own request sample slimmer, you can omit all parameters which are not required and nullable.       However, for a valid and logical bookkeeping document, you will also need some of them to ensure that all the necessary data is in the invoice.<br><br> The list of parameters starts with the invoice array.<br> This array contains all required attributes for a complete invoice.<br> Most of the attributes are covered in the invoice attribute list, there are only two parameters standing out, namely <b>mapAll</b> and <b>objectName</b>.<br> These are just needed for our system and you always need to provide them.<br><br> The list of parameters then continues with the invoice position array.<br> With this array you have the possibility to add multiple positions at once.<br> In the example it only contains one position, again together with the parameters <b>mapAll</b> and <b>objectName</b>, however, you can add more invoice positions by extending the array.<br> So if you wanted to add another position, you would add the same list of parameters with an incremented array index of \"1\" instead of \"0\".<br><br> The list ends with the four parameters invoicePosDelete, discountSave, discountDelete and takeDefaultAddress.<br> They only play a minor role if you only want to create an invoice but we will shortly explain what they can do.<br> With invoicePosDelete you have to option to delete invoice positions as this request can also be used to update invoices.<br> With discountSave you can add discounts to your invoice.<br> With discountDelete you can delete discounts from your invoice.<br> With takeDefaultAddress you can specify that the first address of the contact you are using for the invoice is taken for the invoice address attribute automatically, so you don\'t need to provide the address yourself.<br> If you want to know more about these parameters, for example if you want to use this request to update invoices, feel free to contact our support.<br><br> Finally, after covering all parameters, they only important information left, is that the order of the last four attributes always needs to be kept.<br> You will also always need to provide all of them, as otherwise the request won\'t work properly.<br><br> <b>Warning:</b> You can not create a regular invoice with the <b>deliveryDate</b> being later than the <b>invoiceDate</b>.<br> To do that you will need to create a so called <b>Abschlagsrechnung</b> by setting the <b>invoiceType</b> parameter to <b>AR</b>.
     * Create a new invoice
     */
    async createInvoiceByFactoryRaw(requestParameters: CreateInvoiceByFactoryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SaveInvoiceResponse>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // api_key authentication
        }


        let urlPath = `/Invoice/Factory/saveInvoice`;

        const response = await this.request({
            path: urlPath,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: SaveInvoiceToJSON(requestParameters['saveInvoice']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SaveInvoiceResponseFromJSON(jsonValue));
    }

    /**
     * This endpoint offers you the following functionality.       <ul>          <li>Create invoices together with positions and discounts</li>          <li>Delete positions while adding new ones</li>          <li>Delete or add discounts, or both at the same time</li>          <li>Automatically fill the address of the supplied contact into the invoice address</li>       </ul>       To make your own request sample slimmer, you can omit all parameters which are not required and nullable.       However, for a valid and logical bookkeeping document, you will also need some of them to ensure that all the necessary data is in the invoice.<br><br> The list of parameters starts with the invoice array.<br> This array contains all required attributes for a complete invoice.<br> Most of the attributes are covered in the invoice attribute list, there are only two parameters standing out, namely <b>mapAll</b> and <b>objectName</b>.<br> These are just needed for our system and you always need to provide them.<br><br> The list of parameters then continues with the invoice position array.<br> With this array you have the possibility to add multiple positions at once.<br> In the example it only contains one position, again together with the parameters <b>mapAll</b> and <b>objectName</b>, however, you can add more invoice positions by extending the array.<br> So if you wanted to add another position, you would add the same list of parameters with an incremented array index of \"1\" instead of \"0\".<br><br> The list ends with the four parameters invoicePosDelete, discountSave, discountDelete and takeDefaultAddress.<br> They only play a minor role if you only want to create an invoice but we will shortly explain what they can do.<br> With invoicePosDelete you have to option to delete invoice positions as this request can also be used to update invoices.<br> With discountSave you can add discounts to your invoice.<br> With discountDelete you can delete discounts from your invoice.<br> With takeDefaultAddress you can specify that the first address of the contact you are using for the invoice is taken for the invoice address attribute automatically, so you don\'t need to provide the address yourself.<br> If you want to know more about these parameters, for example if you want to use this request to update invoices, feel free to contact our support.<br><br> Finally, after covering all parameters, they only important information left, is that the order of the last four attributes always needs to be kept.<br> You will also always need to provide all of them, as otherwise the request won\'t work properly.<br><br> <b>Warning:</b> You can not create a regular invoice with the <b>deliveryDate</b> being later than the <b>invoiceDate</b>.<br> To do that you will need to create a so called <b>Abschlagsrechnung</b> by setting the <b>invoiceType</b> parameter to <b>AR</b>.
     * Create a new invoice
     */
    async createInvoiceByFactory(requestParameters: CreateInvoiceByFactoryRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SaveInvoiceResponse> {
        const response = await this.createInvoiceByFactoryRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Create an invoice from an order
     * Create invoice from order
     */
    async createInvoiceFromOrderRaw(requestParameters: CreateInvoiceFromOrderRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ModelInvoiceResponse>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // api_key authentication
        }


        let urlPath = `/Invoice/Factory/createInvoiceFromOrder`;

        const response = await this.request({
            path: urlPath,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ModelCreateInvoiceFromOrderToJSON(requestParameters['modelCreateInvoiceFromOrder']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ModelInvoiceResponseFromJSON(jsonValue));
    }

    /**
     * Create an invoice from an order
     * Create invoice from order
     */
    async createInvoiceFromOrder(requestParameters: CreateInvoiceFromOrderRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ModelInvoiceResponse> {
        const response = await this.createInvoiceFromOrderRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Create an reminder from an invoice
     * Create invoice reminder
     */
    async createInvoiceReminderRaw(requestParameters: CreateInvoiceReminderOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ModelInvoiceResponse>> {
        if (requestParameters['invoiceId'] == null) {
            throw new runtime.RequiredError(
                'invoiceId',
                'Required parameter "invoiceId" was null or undefined when calling createInvoiceReminder().'
            );
        }

        if (requestParameters['invoiceObjectName'] == null) {
            throw new runtime.RequiredError(
                'invoiceObjectName',
                'Required parameter "invoiceObjectName" was null or undefined when calling createInvoiceReminder().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['invoiceId'] != null) {
            queryParameters['invoice[id]'] = requestParameters['invoiceId'];
        }

        if (requestParameters['invoiceObjectName'] != null) {
            queryParameters['invoice[objectName]'] = requestParameters['invoiceObjectName'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // api_key authentication
        }


        let urlPath = `/Invoice/Factory/createInvoiceReminder`;

        const response = await this.request({
            path: urlPath,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CreateInvoiceReminderRequestToJSON(requestParameters['createInvoiceReminderRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ModelInvoiceResponseFromJSON(jsonValue));
    }

    /**
     * Create an reminder from an invoice
     * Create invoice reminder
     */
    async createInvoiceReminder(requestParameters: CreateInvoiceReminderOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ModelInvoiceResponse> {
        const response = await this.createInvoiceReminderRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns a single invoice
     * Find invoice by ID
     */
    async getInvoiceByIdRaw(requestParameters: GetInvoiceByIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GetInvoices200Response>> {
        if (requestParameters['invoiceId'] == null) {
            throw new runtime.RequiredError(
                'invoiceId',
                'Required parameter "invoiceId" was null or undefined when calling getInvoiceById().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // api_key authentication
        }


        let urlPath = `/Invoice/{invoiceId}`;
        urlPath = urlPath.replace(`{${"invoiceId"}}`, encodeURIComponent(String(requestParameters['invoiceId'])));

        const response = await this.request({
            path: urlPath,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GetInvoices200ResponseFromJSON(jsonValue));
    }

    /**
     * Returns a single invoice
     * Find invoice by ID
     */
    async getInvoiceById(requestParameters: GetInvoiceByIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetInvoices200Response> {
        const response = await this.getInvoiceByIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns all positions of an invoice
     * Find invoice positions
     */
    async getInvoicePositionsByIdRaw(requestParameters: GetInvoicePositionsByIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GetInvoicePositionsById200Response>> {
        if (requestParameters['invoiceId'] == null) {
            throw new runtime.RequiredError(
                'invoiceId',
                'Required parameter "invoiceId" was null or undefined when calling getInvoicePositionsById().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['limit'] != null) {
            queryParameters['limit'] = requestParameters['limit'];
        }

        if (requestParameters['offset'] != null) {
            queryParameters['offset'] = requestParameters['offset'];
        }

        if (requestParameters['embed'] != null) {
            queryParameters['embed'] = requestParameters['embed'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // api_key authentication
        }


        let urlPath = `/Invoice/{invoiceId}/getPositions`;
        urlPath = urlPath.replace(`{${"invoiceId"}}`, encodeURIComponent(String(requestParameters['invoiceId'])));

        const response = await this.request({
            path: urlPath,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GetInvoicePositionsById200ResponseFromJSON(jsonValue));
    }

    /**
     * Returns all positions of an invoice
     * Find invoice positions
     */
    async getInvoicePositionsById(requestParameters: GetInvoicePositionsByIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetInvoicePositionsById200Response> {
        const response = await this.getInvoicePositionsByIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * There are a multitude of parameter which can be used to filter. A few of them are attached but       for a complete list please check out <a href=\'#tag/Invoice/How-to-filter-for-certain-invoices\'>this</a> list
     * Retrieve invoices
     */
    async getInvoicesRaw(requestParameters: GetInvoicesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GetInvoices200Response>> {
        const queryParameters: any = {};

        if (requestParameters['status'] != null) {
            queryParameters['status'] = requestParameters['status'];
        }

        if (requestParameters['invoiceNumber'] != null) {
            queryParameters['invoiceNumber'] = requestParameters['invoiceNumber'];
        }

        if (requestParameters['startDate'] != null) {
            queryParameters['startDate'] = requestParameters['startDate'];
        }

        if (requestParameters['endDate'] != null) {
            queryParameters['endDate'] = requestParameters['endDate'];
        }

        if (requestParameters['contactId'] != null) {
            queryParameters['contact[id]'] = requestParameters['contactId'];
        }

        if (requestParameters['contactObjectName'] != null) {
            queryParameters['contact[objectName]'] = requestParameters['contactObjectName'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // api_key authentication
        }


        let urlPath = `/Invoice`;

        const response = await this.request({
            path: urlPath,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GetInvoices200ResponseFromJSON(jsonValue));
    }

    /**
     * There are a multitude of parameter which can be used to filter. A few of them are attached but       for a complete list please check out <a href=\'#tag/Invoice/How-to-filter-for-certain-invoices\'>this</a> list
     * Retrieve invoices
     */
    async getInvoices(requestParameters: GetInvoicesRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetInvoices200Response> {
        const response = await this.getInvoicesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns \'true\' if the given invoice is partially paid - \'false\' if it is not.      Invoices which are completely paid are regarded as not partially paid.
     * Check if an invoice is already partially paid
     */
    async getIsInvoicePartiallyPaidRaw(requestParameters: GetIsInvoicePartiallyPaidRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ContactCustomerNumberAvailabilityCheck200Response>> {
        if (requestParameters['invoiceId'] == null) {
            throw new runtime.RequiredError(
                'invoiceId',
                'Required parameter "invoiceId" was null or undefined when calling getIsInvoicePartiallyPaid().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // api_key authentication
        }


        let urlPath = `/Invoice/{invoiceId}/getIsPartiallyPaid`;
        urlPath = urlPath.replace(`{${"invoiceId"}}`, encodeURIComponent(String(requestParameters['invoiceId'])));

        const response = await this.request({
            path: urlPath,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ContactCustomerNumberAvailabilityCheck200ResponseFromJSON(jsonValue));
    }

    /**
     * Returns \'true\' if the given invoice is partially paid - \'false\' if it is not.      Invoices which are completely paid are regarded as not partially paid.
     * Check if an invoice is already partially paid
     */
    async getIsInvoicePartiallyPaid(requestParameters: GetIsInvoicePartiallyPaidRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ContactCustomerNumberAvailabilityCheck200Response> {
        const response = await this.getIsInvoicePartiallyPaidRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Sets the current date and time as a value for the property `enshrined`.<br> This operation is only possible if the status is \"Open\" (`\"status\": \"200\"`) or higher.  Enshrined invoices cannot be changed. This operation cannot be undone. 
     * Enshrine
     */
    async invoiceEnshrineRaw(requestParameters: InvoiceEnshrineRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CheckAccountTransactionEnshrine200Response>> {
        if (requestParameters['invoiceId'] == null) {
            throw new runtime.RequiredError(
                'invoiceId',
                'Required parameter "invoiceId" was null or undefined when calling invoiceEnshrine().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // api_key authentication
        }


        let urlPath = `/Invoice/{invoiceId}/enshrine`;
        urlPath = urlPath.replace(`{${"invoiceId"}}`, encodeURIComponent(String(requestParameters['invoiceId'])));

        const response = await this.request({
            path: urlPath,
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CheckAccountTransactionEnshrine200ResponseFromJSON(jsonValue));
    }

    /**
     * Sets the current date and time as a value for the property `enshrined`.<br> This operation is only possible if the status is \"Open\" (`\"status\": \"200\"`) or higher.  Enshrined invoices cannot be changed. This operation cannot be undone. 
     * Enshrine
     */
    async invoiceEnshrine(requestParameters: InvoiceEnshrineRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CheckAccountTransactionEnshrine200Response> {
        const response = await this.invoiceEnshrineRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieves the pdf document of an invoice with additional metadata.
     * Retrieve pdf document of an invoice
     */
    async invoiceGetPdfRaw(requestParameters: InvoiceGetPdfRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<InvoiceGetPdf200Response>> {
        if (requestParameters['invoiceId'] == null) {
            throw new runtime.RequiredError(
                'invoiceId',
                'Required parameter "invoiceId" was null or undefined when calling invoiceGetPdf().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['download'] != null) {
            queryParameters['download'] = requestParameters['download'];
        }

        if (requestParameters['preventSendBy'] != null) {
            queryParameters['preventSendBy'] = requestParameters['preventSendBy'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // api_key authentication
        }


        let urlPath = `/Invoice/{invoiceId}/getPdf`;
        urlPath = urlPath.replace(`{${"invoiceId"}}`, encodeURIComponent(String(requestParameters['invoiceId'])));

        const response = await this.request({
            path: urlPath,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => InvoiceGetPdf200ResponseFromJSON(jsonValue));
    }

    /**
     * Retrieves the pdf document of an invoice with additional metadata.
     * Retrieve pdf document of an invoice
     */
    async invoiceGetPdf(requestParameters: InvoiceGetPdfRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<InvoiceGetPdf200Response> {
        const response = await this.invoiceGetPdfRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieves the XML of an e-invoice
     * Retrieve XML of an e-invoice
     */
    async invoiceGetXmlRaw(requestParameters: InvoiceGetXmlRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<InvoiceGetXml200Response>> {
        if (requestParameters['invoiceId'] == null) {
            throw new runtime.RequiredError(
                'invoiceId',
                'Required parameter "invoiceId" was null or undefined when calling invoiceGetXml().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // api_key authentication
        }


        let urlPath = `/Invoice/{invoiceId}/getXml`;
        urlPath = urlPath.replace(`{${"invoiceId"}}`, encodeURIComponent(String(requestParameters['invoiceId'])));

        const response = await this.request({
            path: urlPath,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => InvoiceGetXml200ResponseFromJSON(jsonValue));
    }

    /**
     * Retrieves the XML of an e-invoice
     * Retrieve XML of an e-invoice
     */
    async invoiceGetXml(requestParameters: InvoiceGetXmlRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<InvoiceGetXml200Response> {
        const response = await this.invoiceGetXmlRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Using this endpoint you can render the pdf document of an invoice.<br>       Use cases for this are the retrieval of the pdf location or the forceful re-render of a already sent invoice.<br>       Please be aware that changing an invoice after it has been sent to a customer is not an allowed bookkeeping process.
     * Render the pdf document of an invoice
     */
    async invoiceRenderRaw(requestParameters: InvoiceRenderOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<InvoiceRender201Response>> {
        if (requestParameters['invoiceId'] == null) {
            throw new runtime.RequiredError(
                'invoiceId',
                'Required parameter "invoiceId" was null or undefined when calling invoiceRender().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // api_key authentication
        }


        let urlPath = `/Invoice/{invoiceId}/render`;
        urlPath = urlPath.replace(`{${"invoiceId"}}`, encodeURIComponent(String(requestParameters['invoiceId'])));

        const response = await this.request({
            path: urlPath,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: InvoiceRenderRequestToJSON(requestParameters['invoiceRenderRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => InvoiceRender201ResponseFromJSON(jsonValue));
    }

    /**
     * Using this endpoint you can render the pdf document of an invoice.<br>       Use cases for this are the retrieval of the pdf location or the forceful re-render of a already sent invoice.<br>       Please be aware that changing an invoice after it has been sent to a customer is not an allowed bookkeeping process.
     * Render the pdf document of an invoice
     */
    async invoiceRender(requestParameters: InvoiceRenderOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<InvoiceRender201Response> {
        const response = await this.invoiceRenderRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Resets the status to \"Draft\" (`\"status\": \"100\"`).<br> This is only possible if the invoice has the status \"Open\" (`\"status\": \"200\"`).<br> If it has a higher status use [Invoice/{invoiceId}/resetToOpen](#tag/Invoice/operation/invoiceResetToOpen) first.  This endpoint cannot be used for recurring invoices (`\"invoiceType\": \"WKR\"`).<br> Use [Invoice/Factory/saveInvoice](#tag/Invoice/operation/createInvoiceByFactory) instead. 
     * Reset status to draft
     */
    async invoiceResetToDraftRaw(requestParameters: InvoiceResetToDraftRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<InvoiceResetToDraft200Response>> {
        if (requestParameters['invoiceId'] == null) {
            throw new runtime.RequiredError(
                'invoiceId',
                'Required parameter "invoiceId" was null or undefined when calling invoiceResetToDraft().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // api_key authentication
        }


        let urlPath = `/Invoice/{invoiceId}/resetToDraft`;
        urlPath = urlPath.replace(`{${"invoiceId"}}`, encodeURIComponent(String(requestParameters['invoiceId'])));

        const response = await this.request({
            path: urlPath,
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => InvoiceResetToDraft200ResponseFromJSON(jsonValue));
    }

    /**
     * Resets the status to \"Draft\" (`\"status\": \"100\"`).<br> This is only possible if the invoice has the status \"Open\" (`\"status\": \"200\"`).<br> If it has a higher status use [Invoice/{invoiceId}/resetToOpen](#tag/Invoice/operation/invoiceResetToOpen) first.  This endpoint cannot be used for recurring invoices (`\"invoiceType\": \"WKR\"`).<br> Use [Invoice/Factory/saveInvoice](#tag/Invoice/operation/createInvoiceByFactory) instead. 
     * Reset status to draft
     */
    async invoiceResetToDraft(requestParameters: InvoiceResetToDraftRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<InvoiceResetToDraft200Response> {
        const response = await this.invoiceResetToDraftRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Resets the status \"Open\" (`\"status\": \"200\"`). Linked transactions will be unlinked.<br> This is not possible if the invoice itself or one of its transactions (CheckAccountTransaction) is already enshrined.  This endpoint cannot be used to increase the status to \"Open\" (`\"status\": \"200\"`).<br> Use [Invoice/{invoiceId}/sendBy](#tag/Invoice/operation/invoiceSendBy) / [Invoice/{invoiceId}/sendViaEmail](#tag/Invoice/operation/sendInvoiceViaEMail) instead.  This endpoint cannot be used for recurring invoices (`\"invoiceType\": \"WKR\"`). Use [Invoice/Factory/saveInvoice](#tag/Invoice/operation/createInvoiceByFactory) instead. 
     * Reset status to open
     */
    async invoiceResetToOpenRaw(requestParameters: InvoiceResetToOpenRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<InvoiceResetToOpen200Response>> {
        if (requestParameters['invoiceId'] == null) {
            throw new runtime.RequiredError(
                'invoiceId',
                'Required parameter "invoiceId" was null or undefined when calling invoiceResetToOpen().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // api_key authentication
        }


        let urlPath = `/Invoice/{invoiceId}/resetToOpen`;
        urlPath = urlPath.replace(`{${"invoiceId"}}`, encodeURIComponent(String(requestParameters['invoiceId'])));

        const response = await this.request({
            path: urlPath,
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => InvoiceResetToOpen200ResponseFromJSON(jsonValue));
    }

    /**
     * Resets the status \"Open\" (`\"status\": \"200\"`). Linked transactions will be unlinked.<br> This is not possible if the invoice itself or one of its transactions (CheckAccountTransaction) is already enshrined.  This endpoint cannot be used to increase the status to \"Open\" (`\"status\": \"200\"`).<br> Use [Invoice/{invoiceId}/sendBy](#tag/Invoice/operation/invoiceSendBy) / [Invoice/{invoiceId}/sendViaEmail](#tag/Invoice/operation/sendInvoiceViaEMail) instead.  This endpoint cannot be used for recurring invoices (`\"invoiceType\": \"WKR\"`). Use [Invoice/Factory/saveInvoice](#tag/Invoice/operation/createInvoiceByFactory) instead. 
     * Reset status to open
     */
    async invoiceResetToOpen(requestParameters: InvoiceResetToOpenRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<InvoiceResetToOpen200Response> {
        const response = await this.invoiceResetToOpenRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Marks an invoice as sent by a chosen send type.
     * Mark invoice as sent
     */
    async invoiceSendByRaw(requestParameters: InvoiceSendByOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ModelInvoiceResponse>> {
        if (requestParameters['invoiceId'] == null) {
            throw new runtime.RequiredError(
                'invoiceId',
                'Required parameter "invoiceId" was null or undefined when calling invoiceSendBy().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // api_key authentication
        }


        let urlPath = `/Invoice/{invoiceId}/sendBy`;
        urlPath = urlPath.replace(`{${"invoiceId"}}`, encodeURIComponent(String(requestParameters['invoiceId'])));

        const response = await this.request({
            path: urlPath,
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: InvoiceSendByRequestToJSON(requestParameters['invoiceSendByRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ModelInvoiceResponseFromJSON(jsonValue));
    }

    /**
     * Marks an invoice as sent by a chosen send type.
     * Mark invoice as sent
     */
    async invoiceSendBy(requestParameters: InvoiceSendByOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ModelInvoiceResponse> {
        const response = await this.invoiceSendByRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * This endpoint sends the specified invoice to a customer via email.<br>      This will automatically mark the invoice as sent.<br>      Please note, that in production an invoice is not allowed to be changed after this happened!
     * Send invoice via email
     */
    async sendInvoiceViaEMailRaw(requestParameters: SendInvoiceViaEMailOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ModelEmail>> {
        if (requestParameters['invoiceId'] == null) {
            throw new runtime.RequiredError(
                'invoiceId',
                'Required parameter "invoiceId" was null or undefined when calling sendInvoiceViaEMail().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // api_key authentication
        }


        let urlPath = `/Invoice/{invoiceId}/sendViaEmail`;
        urlPath = urlPath.replace(`{${"invoiceId"}}`, encodeURIComponent(String(requestParameters['invoiceId'])));

        const response = await this.request({
            path: urlPath,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: SendInvoiceViaEMailRequestToJSON(requestParameters['sendInvoiceViaEMailRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ModelEmailFromJSON(jsonValue));
    }

    /**
     * This endpoint sends the specified invoice to a customer via email.<br>      This will automatically mark the invoice as sent.<br>      Please note, that in production an invoice is not allowed to be changed after this happened!
     * Send invoice via email
     */
    async sendInvoiceViaEMail(requestParameters: SendInvoiceViaEMailOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ModelEmail> {
        const response = await this.sendInvoiceViaEMailRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
 * @export
 */
export const GetInvoicesStatusEnum = {
    NUMBER_100: 100,
    NUMBER_200: 200,
    NUMBER_1000: 1000
} as const;
export type GetInvoicesStatusEnum = typeof GetInvoicesStatusEnum[keyof typeof GetInvoicesStatusEnum];

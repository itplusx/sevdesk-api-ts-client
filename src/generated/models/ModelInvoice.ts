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

import { mapValues } from '../runtime';
import type { ModelInvoiceContact } from './ModelInvoiceContact';
import {
    ModelInvoiceContactFromJSON,
    ModelInvoiceContactFromJSONTyped,
    ModelInvoiceContactToJSON,
    ModelInvoiceContactToJSONTyped,
} from './ModelInvoiceContact';
import type { ModelInvoiceOrigin } from './ModelInvoiceOrigin';
import {
    ModelInvoiceOriginFromJSON,
    ModelInvoiceOriginFromJSONTyped,
    ModelInvoiceOriginToJSON,
    ModelInvoiceOriginToJSONTyped,
} from './ModelInvoiceOrigin';
import type { ModelInvoiceTaxSet } from './ModelInvoiceTaxSet';
import {
    ModelInvoiceTaxSetFromJSON,
    ModelInvoiceTaxSetFromJSONTyped,
    ModelInvoiceTaxSetToJSON,
    ModelInvoiceTaxSetToJSONTyped,
} from './ModelInvoiceTaxSet';
import type { ModelCreditNoteCreateUser } from './ModelCreditNoteCreateUser';
import {
    ModelCreditNoteCreateUserFromJSON,
    ModelCreditNoteCreateUserFromJSONTyped,
    ModelCreditNoteCreateUserToJSON,
    ModelCreditNoteCreateUserToJSONTyped,
} from './ModelCreditNoteCreateUser';
import type { ModelInvoiceContactPerson } from './ModelInvoiceContactPerson';
import {
    ModelInvoiceContactPersonFromJSON,
    ModelInvoiceContactPersonFromJSONTyped,
    ModelInvoiceContactPersonToJSON,
    ModelInvoiceContactPersonToJSONTyped,
} from './ModelInvoiceContactPerson';
import type { ModelInvoiceSevClient } from './ModelInvoiceSevClient';
import {
    ModelInvoiceSevClientFromJSON,
    ModelInvoiceSevClientFromJSONTyped,
    ModelInvoiceSevClientToJSON,
    ModelInvoiceSevClientToJSONTyped,
} from './ModelInvoiceSevClient';
import type { ModelCreditNoteResponseTaxRule } from './ModelCreditNoteResponseTaxRule';
import {
    ModelCreditNoteResponseTaxRuleFromJSON,
    ModelCreditNoteResponseTaxRuleFromJSONTyped,
    ModelCreditNoteResponseTaxRuleToJSON,
    ModelCreditNoteResponseTaxRuleToJSONTyped,
} from './ModelCreditNoteResponseTaxRule';
import type { ModelInvoiceAddressCountry } from './ModelInvoiceAddressCountry';
import {
    ModelInvoiceAddressCountryFromJSON,
    ModelInvoiceAddressCountryFromJSONTyped,
    ModelInvoiceAddressCountryToJSON,
    ModelInvoiceAddressCountryToJSONTyped,
} from './ModelInvoiceAddressCountry';
import type { ModelInvoicePaymentMethod } from './ModelInvoicePaymentMethod';
import {
    ModelInvoicePaymentMethodFromJSON,
    ModelInvoicePaymentMethodFromJSONTyped,
    ModelInvoicePaymentMethodToJSON,
    ModelInvoicePaymentMethodToJSONTyped,
} from './ModelInvoicePaymentMethod';

/**
 * Invoice model
 * @export
 * @interface ModelInvoice
 */
export interface ModelInvoice {
    /**
     * The invoice id. <span style='color:red'>Required</span> if you want to create or update an invoice position for an existing invoice
     * @type {number}
     * @memberof ModelInvoice
     */
    id?: number | null;
    /**
     * The invoice object name.
     * @type {string}
     * @memberof ModelInvoice
     */
    objectName?: string;
    /**
     * The invoice number
     * @type {string}
     * @memberof ModelInvoice
     */
    invoiceNumber?: string | null;
    /**
     * 
     * @type {ModelInvoiceContact}
     * @memberof ModelInvoice
     */
    contact: ModelInvoiceContact;
    /**
     * 
     * @type {ModelInvoiceContactPerson}
     * @memberof ModelInvoice
     */
    contactPerson: ModelInvoiceContactPerson;
    /**
     * Date of invoice creation
     * @type {Date}
     * @memberof ModelInvoice
     */
    readonly create?: Date;
    /**
     * Date of last invoice update
     * @type {Date}
     * @memberof ModelInvoice
     */
    readonly update?: Date;
    /**
     * 
     * @type {ModelInvoiceSevClient}
     * @memberof ModelInvoice
     */
    sevClient?: ModelInvoiceSevClient;
    /**
     * Needs to be provided as timestamp or dd.mm.yyyy
     * 
     * **Requirements:**
     * * For final invoices (invoiceType = 'ER'), the invoiceDate must be later than or equal to the invoiceDate of related advance (invoiceType = 'AR') / partial (invoiceType = 'TR') invoices.</li>
     * @type {string}
     * @memberof ModelInvoice
     */
    invoiceDate: string;
    /**
     * Normally consist of prefix plus the invoice number
     * @type {string}
     * @memberof ModelInvoice
     */
    header?: string | null;
    /**
     * Certain html tags can be used here to format your text
     * @type {string}
     * @memberof ModelInvoice
     */
    headText?: string | null;
    /**
     * Certain html tags can be used here to format your text
     * @type {string}
     * @memberof ModelInvoice
     */
    footText?: string | null;
    /**
     * The time the customer has to pay the invoice in days
     * @type {number}
     * @memberof ModelInvoice
     */
    timeToPay?: number | null;
    /**
     * If you want to give a discount, define the percentage here. Otherwise provide zero as value
     * @type {number}
     * @memberof ModelInvoice
     */
    discount: number;
    /**
     * Complete address of the recipient including name, street, city, zip and country.
     *      * Line breaks can be used and will be displayed on the invoice pdf.
     * @type {string}
     * @memberof ModelInvoice
     */
    address?: string | null;
    /**
     * 
     * @type {ModelInvoiceAddressCountry}
     * @memberof ModelInvoice
     */
    addressCountry: ModelInvoiceAddressCountry;
    /**
     * Needs to be timestamp or dd.mm.yyyy
     * @type {Date}
     * @memberof ModelInvoice
     */
    payDate?: Date | null;
    /**
     * 
     * @type {ModelCreditNoteCreateUser}
     * @memberof ModelInvoice
     */
    createUser?: ModelCreditNoteCreateUser;
    /**
     * Timestamp. This can also be a date range if you also use the attribute deliveryDateUntil
     * @type {Date}
     * @memberof ModelInvoice
     */
    deliveryDate?: Date | null;
    /**
     * If the delivery date should be a time range, another timestamp can be provided in this attribute
     *      * to define a range from timestamp used in deliveryDate attribute to the timestamp used here.
     * @type {number}
     * @memberof ModelInvoice
     */
    deliveryDateUntil?: number | null;
    /**
     * Please have a look in our
     *      <a href='#tag/Invoice/Types-and-status-of-invoices'>Types and status of invoices</a>
     *      to see what the different status codes mean
     * @type {string}
     * @memberof ModelInvoice
     */
    status: ModelInvoiceStatusEnum;
    /**
     * Defines if the client uses the small settlement scheme.
     *     If yes, the invoice must not contain any vat
     * @type {boolean}
     * @memberof ModelInvoice
     */
    smallSettlement?: boolean | null;
    /**
     * This is not used anymore. Use the taxRate of the individual positions instead.
     * @type {number}
     * @memberof ModelInvoice
     */
    taxRate: number;
    /**
     * 
     * @type {ModelCreditNoteResponseTaxRule}
     * @memberof ModelInvoice
     */
    taxRule: ModelCreditNoteResponseTaxRule;
    /**
     * A common tax text would be 'Umsatzsteuer 19%'
     * @type {string}
     * @memberof ModelInvoice
     */
    taxText: string;
    /**
     * **Use this in sevdesk-Update 1.0 (instead of taxRule).**
     * 
     * Tax type of the invoice.
     * There are four tax types:
     * 1. default - Umsatzsteuer ausweisen
     * 2. eu - Steuerfreie innergemeinschaftliche Lieferung (Europäische Union)
     * 3. noteu - Steuerschuldnerschaft des Leistungsempfängers (außerhalb EU, z. B. Schweiz)
     * 4. custom - Using custom tax set
     * 5. ss - Not subject to VAT according to §19 1 UStG
     * Tax rates are heavily connected to the tax type used.
     * @type {string}
     * @memberof ModelInvoice
     */
    taxType: ModelInvoiceTaxTypeEnum;
    /**
     * 
     * @type {ModelInvoiceTaxSet}
     * @memberof ModelInvoice
     */
    taxSet?: ModelInvoiceTaxSet | null;
    /**
     * Defines how many reminders have already been sent for the invoice.
     *     Starts with 1 (Payment reminder) and should be incremented by one every time another reminder is sent.
     * @type {number}
     * @memberof ModelInvoice
     */
    readonly dunningLevel?: number | null;
    /**
     * 
     * @type {ModelInvoicePaymentMethod}
     * @memberof ModelInvoice
     */
    paymentMethod?: ModelInvoicePaymentMethod;
    /**
     * The date the invoice was sent to the customer
     * @type {Date}
     * @memberof ModelInvoice
     */
    sendDate?: Date | null;
    /**
     * Type of the invoice. For more information on the different types, check
     *      <a href='#tag/Invoice/Types-and-status-of-invoices'>this</a> section
     * 
     * @type {string}
     * @memberof ModelInvoice
     */
    invoiceType: ModelInvoiceInvoiceTypeEnum;
    /**
     * The interval in which recurring invoices are due as ISO-8601 duration.<br>
     *      Necessary attribute for all recurring invoices.
     * @type {string}
     * @memberof ModelInvoice
     */
    readonly accountIntervall?: string | null;
    /**
     * Timestamp when the next invoice will be generated by this recurring invoice.
     * @type {number}
     * @memberof ModelInvoice
     */
    readonly accountNextInvoice?: number | null;
    /**
     * Currency used in the invoice. Needs to be currency code according to ISO-4217
     * @type {string}
     * @memberof ModelInvoice
     */
    currency: string;
    /**
     * Net sum of the invoice
     * @type {number}
     * @memberof ModelInvoice
     */
    readonly sumNet?: number;
    /**
     * Tax sum of the invoice
     * @type {number}
     * @memberof ModelInvoice
     */
    readonly sumTax?: number;
    /**
     * Gross sum of the invoice
     * @type {number}
     * @memberof ModelInvoice
     */
    readonly sumGross?: number;
    /**
     * Sum of all discounts in the invoice
     * @type {number}
     * @memberof ModelInvoice
     */
    readonly sumDiscounts?: number;
    /**
     * Net sum of the invoice in the foreign currency
     * @type {number}
     * @memberof ModelInvoice
     */
    readonly sumNetForeignCurrency?: number;
    /**
     * Tax sum of the invoice in the foreign currency
     * @type {number}
     * @memberof ModelInvoice
     */
    readonly sumTaxForeignCurrency?: number;
    /**
     * Gross sum of the invoice in the foreign currency
     * @type {number}
     * @memberof ModelInvoice
     */
    readonly sumGrossForeignCurrency?: number;
    /**
     * Discounts sum of the invoice in the foreign currency
     * @type {number}
     * @memberof ModelInvoice
     */
    readonly sumDiscountsForeignCurrency?: number;
    /**
     * Net accounting sum of the invoice. Is usually the same as sumNet
     * @type {number}
     * @memberof ModelInvoice
     */
    readonly sumNetAccounting?: number;
    /**
     * Tax accounting sum of the invoice. Is usually the same as sumTax
     * @type {number}
     * @memberof ModelInvoice
     */
    readonly sumTaxAccounting?: number;
    /**
     * Gross accounting sum of the invoice. Is usually the same as sumGross
     * @type {number}
     * @memberof ModelInvoice
     */
    readonly sumGrossAccounting?: number;
    /**
     * Amount which has already been paid for this invoice by the customer
     * @type {number}
     * @memberof ModelInvoice
     */
    readonly paidAmount?: number | null;
    /**
     * If true, the net amount of each position will be shown on the invoice. Otherwise gross amount
     * @type {boolean}
     * @memberof ModelInvoice
     */
    showNet?: boolean;
    /**
     * Enshrined invoices cannot be changed. Can only be set via [Invoice/{invoiceId}/enshrine](#tag/Invoice/operation/invoiceEnshrine). This operation cannot be undone.
     * @type {Date}
     * @memberof ModelInvoice
     */
    readonly enshrined?: Date;
    /**
     * Type which was used to send the invoice.
     * @type {string}
     * @memberof ModelInvoice
     */
    sendType?: ModelInvoiceSendTypeEnum | null;
    /**
     * 
     * @type {ModelInvoiceOrigin}
     * @memberof ModelInvoice
     */
    origin?: ModelInvoiceOrigin | null;
    /**
     * Internal note of the customer. Contains data entered into field 'Referenz/Bestellnummer'
     * @type {string}
     * @memberof ModelInvoice
     */
    customerInternalNote?: string | null;
    /**
     * If true, the invoice will be created as e-invoice.
     * 
     * To create a valid e-invoice some extra data are required
     * - sevClient
     *     - addressStreet
     *     - addressZip
     *     - addressCity
     *     - bankIban
     *     - bankBic
     *     - contactEmail
     *     - contactPhone
     *     - taxNumber
     *     - vatNumber
     * - contact
     *     - buyerReference
     *     - email
     * - invoice
     *     - paymentMethod
     *     - addressStreet
     *     - addressZip
     *     - addressCity
     *     - addressCountry
     *     - contact
     * @type {boolean}
     * @memberof ModelInvoice
     */
    propertyIsEInvoice?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof ModelInvoice
     */
    mapAll: boolean;
}


/**
 * @export
 */
export const ModelInvoiceStatusEnum = {
    _50: '50',
    _100: '100',
    _200: '200',
    _750: '750',
    _1000: '1000'
} as const;
export type ModelInvoiceStatusEnum = typeof ModelInvoiceStatusEnum[keyof typeof ModelInvoiceStatusEnum];

/**
 * @export
 */
export const ModelInvoiceTaxTypeEnum = {
    Default: 'default',
    Eu: 'eu',
    Noteu: 'noteu',
    Custom: 'custom'
} as const;
export type ModelInvoiceTaxTypeEnum = typeof ModelInvoiceTaxTypeEnum[keyof typeof ModelInvoiceTaxTypeEnum];

/**
 * @export
 */
export const ModelInvoiceInvoiceTypeEnum = {
    Re: 'RE',
    Wkr: 'WKR',
    Sr: 'SR',
    Ma: 'MA',
    Tr: 'TR',
    Ar: 'AR',
    Er: 'ER'
} as const;
export type ModelInvoiceInvoiceTypeEnum = typeof ModelInvoiceInvoiceTypeEnum[keyof typeof ModelInvoiceInvoiceTypeEnum];

/**
 * @export
 */
export const ModelInvoiceSendTypeEnum = {
    Vpr: 'VPR',
    Vpdf: 'VPDF',
    Vm: 'VM',
    Vp: 'VP'
} as const;
export type ModelInvoiceSendTypeEnum = typeof ModelInvoiceSendTypeEnum[keyof typeof ModelInvoiceSendTypeEnum];


/**
 * Check if a given object implements the ModelInvoice interface.
 */
export function instanceOfModelInvoice(value: object): value is ModelInvoice {
    if (!('contact' in value) || value['contact'] === undefined) return false;
    if (!('contactPerson' in value) || value['contactPerson'] === undefined) return false;
    if (!('invoiceDate' in value) || value['invoiceDate'] === undefined) return false;
    if (!('discount' in value) || value['discount'] === undefined) return false;
    if (!('addressCountry' in value) || value['addressCountry'] === undefined) return false;
    if (!('status' in value) || value['status'] === undefined) return false;
    if (!('taxRate' in value) || value['taxRate'] === undefined) return false;
    if (!('taxRule' in value) || value['taxRule'] === undefined) return false;
    if (!('taxText' in value) || value['taxText'] === undefined) return false;
    if (!('taxType' in value) || value['taxType'] === undefined) return false;
    if (!('invoiceType' in value) || value['invoiceType'] === undefined) return false;
    if (!('currency' in value) || value['currency'] === undefined) return false;
    if (!('mapAll' in value) || value['mapAll'] === undefined) return false;
    return true;
}

export function ModelInvoiceFromJSON(json: any): ModelInvoice {
    return ModelInvoiceFromJSONTyped(json, false);
}

export function ModelInvoiceFromJSONTyped(json: any, ignoreDiscriminator: boolean): ModelInvoice {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'objectName': json['objectName'] == null ? undefined : json['objectName'],
        'invoiceNumber': json['invoiceNumber'] == null ? undefined : json['invoiceNumber'],
        'contact': ModelInvoiceContactFromJSON(json['contact']),
        'contactPerson': ModelInvoiceContactPersonFromJSON(json['contactPerson']),
        'create': json['create'] == null ? undefined : (new Date(json['create'])),
        'update': json['update'] == null ? undefined : (new Date(json['update'])),
        'sevClient': json['sevClient'] == null ? undefined : ModelInvoiceSevClientFromJSON(json['sevClient']),
        'invoiceDate': json['invoiceDate'],
        'header': json['header'] == null ? undefined : json['header'],
        'headText': json['headText'] == null ? undefined : json['headText'],
        'footText': json['footText'] == null ? undefined : json['footText'],
        'timeToPay': json['timeToPay'] == null ? undefined : json['timeToPay'],
        'discount': json['discount'],
        'address': json['address'] == null ? undefined : json['address'],
        'addressCountry': ModelInvoiceAddressCountryFromJSON(json['addressCountry']),
        'payDate': json['payDate'] == null ? undefined : (new Date(json['payDate'])),
        'createUser': json['createUser'] == null ? undefined : ModelCreditNoteCreateUserFromJSON(json['createUser']),
        'deliveryDate': json['deliveryDate'] == null ? undefined : (new Date(json['deliveryDate'])),
        'deliveryDateUntil': json['deliveryDateUntil'] == null ? undefined : json['deliveryDateUntil'],
        'status': json['status'],
        'smallSettlement': json['smallSettlement'] == null ? undefined : json['smallSettlement'],
        'taxRate': json['taxRate'],
        'taxRule': ModelCreditNoteResponseTaxRuleFromJSON(json['taxRule']),
        'taxText': json['taxText'],
        'taxType': json['taxType'],
        'taxSet': json['taxSet'] == null ? undefined : ModelInvoiceTaxSetFromJSON(json['taxSet']),
        'dunningLevel': json['dunningLevel'] == null ? undefined : json['dunningLevel'],
        'paymentMethod': json['paymentMethod'] == null ? undefined : ModelInvoicePaymentMethodFromJSON(json['paymentMethod']),
        'sendDate': json['sendDate'] == null ? undefined : (new Date(json['sendDate'])),
        'invoiceType': json['invoiceType'],
        'accountIntervall': json['accountIntervall'] == null ? undefined : json['accountIntervall'],
        'accountNextInvoice': json['accountNextInvoice'] == null ? undefined : json['accountNextInvoice'],
        'currency': json['currency'],
        'sumNet': json['sumNet'] == null ? undefined : json['sumNet'],
        'sumTax': json['sumTax'] == null ? undefined : json['sumTax'],
        'sumGross': json['sumGross'] == null ? undefined : json['sumGross'],
        'sumDiscounts': json['sumDiscounts'] == null ? undefined : json['sumDiscounts'],
        'sumNetForeignCurrency': json['sumNetForeignCurrency'] == null ? undefined : json['sumNetForeignCurrency'],
        'sumTaxForeignCurrency': json['sumTaxForeignCurrency'] == null ? undefined : json['sumTaxForeignCurrency'],
        'sumGrossForeignCurrency': json['sumGrossForeignCurrency'] == null ? undefined : json['sumGrossForeignCurrency'],
        'sumDiscountsForeignCurrency': json['sumDiscountsForeignCurrency'] == null ? undefined : json['sumDiscountsForeignCurrency'],
        'sumNetAccounting': json['sumNetAccounting'] == null ? undefined : json['sumNetAccounting'],
        'sumTaxAccounting': json['sumTaxAccounting'] == null ? undefined : json['sumTaxAccounting'],
        'sumGrossAccounting': json['sumGrossAccounting'] == null ? undefined : json['sumGrossAccounting'],
        'paidAmount': json['paidAmount'] == null ? undefined : json['paidAmount'],
        'showNet': json['showNet'] == null ? undefined : json['showNet'],
        'enshrined': json['enshrined'] == null ? undefined : (new Date(json['enshrined'])),
        'sendType': json['sendType'] == null ? undefined : json['sendType'],
        'origin': json['origin'] == null ? undefined : ModelInvoiceOriginFromJSON(json['origin']),
        'customerInternalNote': json['customerInternalNote'] == null ? undefined : json['customerInternalNote'],
        'propertyIsEInvoice': json['propertyIsEInvoice'] == null ? undefined : json['propertyIsEInvoice'],
        'mapAll': json['mapAll'],
    };
}

export function ModelInvoiceToJSON(json: any): ModelInvoice {
    return ModelInvoiceToJSONTyped(json, false);
}

export function ModelInvoiceToJSONTyped(value?: Omit<ModelInvoice, 'create'|'update'|'dunningLevel'|'accountIntervall'|'accountNextInvoice'|'sumNet'|'sumTax'|'sumGross'|'sumDiscounts'|'sumNetForeignCurrency'|'sumTaxForeignCurrency'|'sumGrossForeignCurrency'|'sumDiscountsForeignCurrency'|'sumNetAccounting'|'sumTaxAccounting'|'sumGrossAccounting'|'paidAmount'|'enshrined'> | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'id': value['id'],
        'objectName': value['objectName'],
        'invoiceNumber': value['invoiceNumber'],
        'contact': ModelInvoiceContactToJSON(value['contact']),
        'contactPerson': ModelInvoiceContactPersonToJSON(value['contactPerson']),
        'sevClient': ModelInvoiceSevClientToJSON(value['sevClient']),
        'invoiceDate': value['invoiceDate'],
        'header': value['header'],
        'headText': value['headText'],
        'footText': value['footText'],
        'timeToPay': value['timeToPay'],
        'discount': value['discount'],
        'address': value['address'],
        'addressCountry': ModelInvoiceAddressCountryToJSON(value['addressCountry']),
        'payDate': value['payDate'] === null ? null : ((value['payDate'] as any)?.toISOString()),
        'createUser': ModelCreditNoteCreateUserToJSON(value['createUser']),
        'deliveryDate': value['deliveryDate'] === null ? null : ((value['deliveryDate'] as any)?.toISOString()),
        'deliveryDateUntil': value['deliveryDateUntil'],
        'status': value['status'],
        'smallSettlement': value['smallSettlement'],
        'taxRate': value['taxRate'],
        'taxRule': ModelCreditNoteResponseTaxRuleToJSON(value['taxRule']),
        'taxText': value['taxText'],
        'taxType': value['taxType'],
        'taxSet': ModelInvoiceTaxSetToJSON(value['taxSet']),
        'paymentMethod': ModelInvoicePaymentMethodToJSON(value['paymentMethod']),
        'sendDate': value['sendDate'] === null ? null : ((value['sendDate'] as any)?.toISOString()),
        'invoiceType': value['invoiceType'],
        'currency': value['currency'],
        'showNet': value['showNet'],
        'sendType': value['sendType'],
        'origin': ModelInvoiceOriginToJSON(value['origin']),
        'customerInternalNote': value['customerInternalNote'],
        'propertyIsEInvoice': value['propertyIsEInvoice'],
        'mapAll': value['mapAll'],
    };
}


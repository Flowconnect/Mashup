/*
 * Basic responsive mashup template
 * @owner Enter you name here (xxx)
 */
/*
 *    Fill in host and port for Qlik engine
 */
var prefix = '/vp/';
var config = {
	host: 'sense.flowconnect.nl',
	prefix: prefix,
	port: 443,
	isSecure: true
};
require.config( {
	baseUrl: ( config.isSecure ? "https://" : "http://" ) + config.host + (config.port ? ":" + config.port : "") + config.prefix + "resources"
} );

require( ["js/qlik"], function ( qlik ) {
	qlik.setOnError( function ( error ) {
		$( '#popupText' ).append( error.message + "<br>" );
		$( '#popup' ).fadeIn( 1000 );
	} );
	$( "#closePopup" ).click( function () {
		$( '#popup' ).hide();
	} );

	//callbacks -- inserted here --
	//open apps -- inserted here --
	var app = qlik.openApp('e586bb89-cb1a-4d9e-a17f-c141b058e958', config);

	//get objects -- inserted here --
	app.getObject('QV02','c5e94d61-3a53-452a-bace-f7c78e9e43c5');
	app.getObject('QV01','Ksf');
	//create cubes and lists -- inserted here --

} );

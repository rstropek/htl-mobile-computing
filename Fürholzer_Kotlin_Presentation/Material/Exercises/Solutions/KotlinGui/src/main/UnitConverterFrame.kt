package main;

import javax.swing.JFrame;
import javax.swing.JButton;
import javax.swing.JLabel;
import javax.swing.JTextField;
import javax.swing.JPanel;

public class UnitConverterFrame : JFrame{
	// Neues Frame das von java.awt.Frame abgeleitet wird
	private val text : JLabel = JLabel("Fahreinheit / Celsius Umrechner");
	private val celsiusBox : JTextField = JTextField();
	private val celsiusLabel : JLabel = JLabel("Grad Celsius");
	private val fahreinheitBox : JTextField= JTextField();
	private val fahreinheitLabel : JLabel = JLabel("Fahreinheit");
	private val convertButton : JButton = JButton("Umrechnen");
	private val middleContainer : JPanel = JPanel();
	//Private Member -> Diese müssen in Kotlin sofort mit einem Standartwert intialisiert werden!
	public constructor() : super(){
		//Beim deklarieren eines Konstruktors muss immer ein Konstruktor der Superklasse gewählt werden
		this.setSize(300,300);
		this.title = "Einheiten Umrechner";
		this.isResizable = false;
		//Oftmals wird bei Kotlin keine .set() Methode benötigt
		this.convertButton.addActionListener({
			if(!(fahreinheitBox.text.equals("") && celsiusBox.text.equals(""))){
				//Überprüfen ob in mindestens einer Box ein Wert steht
				if(this.fahreinheitBox.text.equals("")){
					this.fahreinheitBox.text=getFahreinheit(this.celsiusBox.text).toString();
				}else if(this.celsiusBox.text.equals("")){
					this.celsiusBox.text = getCelsius(this.fahreinheitBox.text).toString();
				}
				//Wenn in beiden Boxen text steht wird nichts gemacht
			}
		});
		//Es wird hier keine neue Klasse benötigt -> der Auszuführende Code wird einfach geschrieben!
		this.middleContainer.layout=java.awt.GridLayout(2,2);
		this.middleContainer.add(this.fahreinheitLabel);
		this.middleContainer.add(this.celsiusLabel);
		this.middleContainer.add(this.fahreinheitBox);
		this.middleContainer.add(this.celsiusBox);
		//JPannel befüllen
		this.layout=java.awt.GridLayout(3,1);
		this.add(text);
		this.add(middleContainer);
		this.add(convertButton);
		//Hauptframe befüllen
		this.isVisible=true;
		//Frame sichtbar setzten
	}
	
			
	
}
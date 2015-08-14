package controller

import play.api.mvc.Controller
import play.api.mvc.Action
import scala.concurrent.Future
import scala.concurrent.ExecutionContext.Implicits.global


/**
 * @author syed.atif.akhtar
 */
object MainController extends Controller{
  
  def testRoute = Action.async{
    Future{
      Ok("Yaaaays!")
    }
  }
  
}